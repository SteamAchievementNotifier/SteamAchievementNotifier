export function init(appId?: number | undefined | null): void
export function restartAppIfNecessary(appId: number): boolean
export function runCallbacks(): void
export interface PlayerSteamId {
  steamId64: bigint
  steamId32: string
  accountId: number
}
export namespace achievement {
  export function isActivated(achievement: string): boolean
  export function unlock(achievement: string): boolean
  export function lock(achievement: string): boolean
  export function getAchievementDisplayAttribute(achievement: string, key: string): string
  export function getAchievementAchievedPercent(achievement: string): number
  export interface Icon {
    handle: Array<number>
    width: number
    height: number
  }
  export function getAchievementIcon(achievement: string): Icon | null
  export function getNumAchievements(): number
  export function getAchievementNames(): Array<string>
}
export namespace apps {
  export function isSubscribedApp(appId: number): boolean
  export function isAppInstalled(appId: number): boolean
  export function isDlcInstalled(appId: number): boolean
  export function isSubscribedFromFreeWeekend(): boolean
  export function isVacBanned(): boolean
  export function isCybercafe(): boolean
  export function isLowViolence(): boolean
  export function isSubscribed(): boolean
  export function appBuildId(): number
  export function appInstallDir(appId: number): string
  export function appOwner(): PlayerSteamId
  export function availableGameLanguages(): Array<string>
  export function currentGameLanguage(): string
  export function currentBetaName(): string | null
}
export namespace callback {
  export const enum SteamCallback {
    PersonaStateChange = 0,
    SteamServersConnected = 1,
    SteamServersDisconnected = 2,
    SteamServerConnectFailure = 3,
    LobbyDataUpdate = 4,
    LobbyChatUpdate = 5,
    P2PSessionRequest = 6,
    P2PSessionConnectFail = 7,
    GameLobbyJoinRequested = 8,
    MicroTxnAuthorizationResponse = 9
  }
  export class Handle {
    disconnect(): void
  }
}
export namespace localplayer {
  export function getSteamId(): PlayerSteamId
  export function getName(): string
  export function getLevel(): number
  /** @returns the 2 digit ISO 3166-1-alpha-2 format country code which client is running in, e.g. "US" or "UK". */
  export function getIpCountry(): string
  export function setRichPresence(key: string, value?: string | undefined | null): void
}
export namespace log {
  export function initLogger(appData: string): string
  export function testPanic(): void
}
export namespace utils {
  export function getAppId(): number
  export function ipCountry(): string
  export function getServerRealTime(): number
  export function isSteamRunningOnSteamDeck(): boolean
  export function uiLanguage(): string
}
export namespace processes {
  export interface ProcessInfo {
    pid: number
    exe: string
    windowtitle: string
  }
  export function getGameProcesses(appid: number, linkedgame?: string | undefined | null): Array<ProcessInfo>
  export function isProcessRunning(pid: number): boolean
}
