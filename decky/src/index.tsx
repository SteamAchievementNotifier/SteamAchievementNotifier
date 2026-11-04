import { ButtonItem, PanelSection, PanelSectionRow, ToggleField, Field, staticClasses } from "@decky/ui"
import { callable, definePlugin, toaster } from "@decky/api"
import { CSSProperties, useEffect, useState } from "react"
import { FaTrophy } from "react-icons/fa"

type Tracking = { appid: number, gamename: string | null, ra: boolean, unlocked: number, total: number }
type Status = {
    running: boolean,
    appimage: string | null,
    version: string | null,
    tracking: Tracking | null,
    autostart: boolean,
    log: string,
    searched: string[]
}
type Result = { ok: boolean, message: string }

const getStatus = callable<[], Status>("get_status")
const setAutostart = callable<[value: boolean], boolean>("set_autostart")
const start = callable<[], Result>("start")
const stop = callable<[], Result>("stop")
const testNotification = callable<[], Result>("test_notification")

const notifyResult = (result: Result) => !result.ok && toaster.toast({ title: "Steam Achievement Notifier", body: result.message })

const colors = {
    muted: "#8b929a",
    running: "#59bf40",
    stopped: "#c04040",
    bar: "#1a9fff",
    track: "#23262e"
}

const styles: Record<string, CSSProperties> = {
    small: { fontSize: "12px", color: colors.muted, lineHeight: "16px", wordBreak: "break-all" },
    status: { display: "flex", alignItems: "center", gap: "8px", fontWeight: "bold" },
    dot: { width: "10px", height: "10px", borderRadius: "50%", flexShrink: 0 },
    art: { width: "100%", aspectRatio: "460 / 215", objectFit: "cover", borderRadius: "4px", display: "block" },
    gamename: { fontSize: "16px", fontWeight: "bold", margin: "8px 0 2px", lineHeight: "20px" },
    track: { height: "6px", borderRadius: "3px", background: colors.track, overflow: "hidden", margin: "6px 0 4px" },
    progress: { height: "100%", background: colors.bar, transition: "width 0.3s ease" },
    progressinfo: { display: "flex", justifyContent: "space-between", fontSize: "12px", color: colors.muted }
}

// Shorten `/home/<user>/...` to `~/...` so the path fits in the panel
const tidyPath = (path: string) => path.replace(/^\/home\/[^/]+/, "~")

const StatusRow = ({ status }: { status: Status }) => (
    <PanelSectionRow>
        <Field
            label={
                <div style={styles.status}>
                    <div style={{ ...styles.dot, background: status.running ? colors.running : colors.stopped }} />
                    {status.running ? "Running" : "Stopped"}
                </div>
            }
            bottomSeparator="none"
        >
            {status.version && <span style={{ color: colors.muted }}>v{status.version}</span>}
        </Field>
        <div style={{ ...styles.small, marginTop: "-6px", paddingBottom: "8px" }}>
            {status.appimage ? tidyPath(status.appimage) : `AppImage not found. Searched: ${status.searched.map(tidyPath).join(", ")}`}
        </div>
    </PanelSectionRow>
)

// Steam's library art is preferred (already cached locally, and works for newer games/non-Steam shortcuts), falling back to the store CDNs
const artSources = (appid: number): string[] => {
    const sources: string[] = []

    try {
        const { appStore } = window as any
        const overview = appStore?.GetAppOverviewByAppID(appid)
        const landscape = overview && appStore.GetLandscapeImageURLForApp?.(overview)
        landscape && sources.push(landscape)
    } catch (err) {
        console.warn(`[SAN] Unable to get library art for AppID ${appid}:`, err)
    }

    sources.push(
        `https://shared.steamstatic.com/store_item_assets/steam/apps/${appid}/header.jpg`,
        `https://cdn.cloudflare.steamstatic.com/steam/apps/${appid}/header.jpg`
    )

    return sources
}

const GameArt = ({ appid }: { appid: number }) => {
    const [sources] = useState(() => artSources(appid))
    const [index, setIndex] = useState(0)
    if (index >= sources.length) return null

    return <img src={sources[index]} style={styles.art} onError={() => setIndex(index + 1)} />
}

const TrackingCard = ({ tracking }: { tracking: Tracking | null }) => {
    if (!tracking) return <div style={styles.small}>Waiting for a game to launch...</div>

    const { appid, gamename, ra, unlocked, total } = tracking
    const percent = total ? Math.round((unlocked / total) * 100) : 0

    return (
        <div>
            {!ra && <GameArt key={appid} appid={appid} />}
            <div style={styles.gamename}>{gamename || `AppID ${appid}`}</div>
            {ra && <div style={styles.small}>RetroAchievements</div>}
            {total ? (
                <>
                    <div style={styles.track}>
                        <div style={{ ...styles.progress, width: `${percent}%` }} />
                    </div>
                    <div style={styles.progressinfo}>
                        <span>{unlocked} / {total} achievements</span>
                        <span>{percent}%</span>
                    </div>
                </>
            ) : (
                <div style={styles.small}>This game has no achievements</div>
            )}
        </div>
    )
}

const Content = () => {
    const [status, setStatus] = useState<Status | null>(null)
    const [busy, setBusy] = useState(false)

    const refresh = async () => setStatus(await getStatus())

    useEffect(() => {
        refresh()
        const timer = setInterval(refresh, 2000)
        return () => clearInterval(timer)
    }, [])

    const run = async (fn: () => Promise<Result>) => {
        setBusy(true)
        try {
            notifyResult(await fn())
        } finally {
            await refresh()
            setBusy(false)
        }
    }

    if (!status) return <PanelSection><PanelSectionRow><div style={styles.small}>Loading...</div></PanelSectionRow></PanelSection>

    return (
        <>
            <PanelSection title="Status">
                <StatusRow status={status} />
            </PanelSection>
            {status.running && (
                <PanelSection title="Now Tracking">
                    <PanelSectionRow>
                        <TrackingCard tracking={status.tracking} />
                    </PanelSectionRow>
                </PanelSection>
            )}
            <PanelSection title="Controls">
                <PanelSectionRow>
                    <ButtonItem layout="below" disabled={busy || !status.appimage} onClick={() => run(status.running ? stop : start)}>
                        {status.running ? "Stop" : "Start"}
                    </ButtonItem>
                </PanelSectionRow>
                <PanelSectionRow>
                    <ButtonItem layout="below" disabled={busy || !status.running} onClick={() => run(testNotification)}>
                        Show Test Notification
                    </ButtonItem>
                </PanelSectionRow>
            </PanelSection>
            <PanelSection title="Settings">
                <PanelSectionRow>
                    <ToggleField
                        label="Start Automatically"
                        description="Launch SAN when Game Mode starts"
                        checked={status.autostart}
                        onChange={async value => {
                            await setAutostart(value)
                            await refresh()
                        }}
                    />
                </PanelSectionRow>
            </PanelSection>
        </>
    )
}

export default definePlugin(() => ({
    name: "Steam Achievement Notifier",
    titleView: <div className={staticClasses.Title} style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Achievements</div>,
    content: <Content />,
    icon: <FaTrophy />
}))
