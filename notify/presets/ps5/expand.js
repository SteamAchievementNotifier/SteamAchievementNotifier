(function () {
    "use strict";

    var isExpanded = false;
    var lastToggleTime = 0;
    var initialized = false;
    var retries = 0;

    function ipc() {
        try { return require("electron").ipcRenderer; } catch (_) { return null; }
    }

    function resetPs5State() {
        var oldCard = document.getElementById("ps5card");
        if (oldCard && oldCard.parentNode) oldCard.parentNode.removeChild(oldCard);
        isExpanded = false;
        lastToggleTime = 0;
        window.__ps5Expanded = false;
        document.body.removeAttribute("expanded");
        document.body.removeAttribute("paused");
        var achEl = document.getElementById("achcont");
        if (achEl) achEl.style.display = "";
        var ip = ipc();
        if (ip) { try { ip.send("ps5_tab_hook", false); } catch (_) { } }
    }

    function init() {
        if (initialized) return;

        var achcont = document.getElementById("achcont");
        if (!achcont) {
            if (retries++ < 250) setTimeout(init, 20);
            return;
        }

        var payload = window.__san_obj;
        if (!payload || !payload.customisation) {
            if (retries++ < 250) { setTimeout(init, 20); return; }
            resetPs5State();
            initialized = true;
            return;
        }
        if (payload.customisation.preset !== "ps5") {
            resetPs5State();
            initialized = true;
            return;
        }
        var bodyPreset = document.body.getAttribute("preset");
        if (bodyPreset && bodyPreset !== "ps5") {
            resetPs5State();
            initialized = true;
            return;
        }

        achcont.__ps5Armed = true;
        initialized = true;

        if (!document.getElementById("ps5card")) {
            createPS5Card();
        }

        var ip = ipc();
        if (ip) {
            if (!window.__ps5ToggleBound) {
                window.__ps5ToggleBound = true;
                ip.on("ps5_toggle_expand", function () { toggleExpand(); });
                window.addEventListener("beforeunload", function () {
                    try { ip.send("ps5_tab_hook", false); } catch (_) { }
                });
            }
            ip.send("ps5_tab_hook", true);
        }

        var outer = document.getElementById("outerwrapper");
        if (outer && !outer.__ps5ClickBound) {
            outer.__ps5ClickBound = true;
            outer.addEventListener("click", function () {
                if (!isExpanded) toggleExpand();
            });
        }

    }

    function createPS5Card() {
        var outer = document.getElementById("outerwrapper");
        if (!outer || document.getElementById("ps5card")) return;

        var card = document.createElement("div");
        card.id = "ps5card";

        card.innerHTML = [
            '<div id="ps5card_hero_row">',
            '  <div id="ps5card_icon_wrapper">',
                    '    <img id="ps5card_icon" src="" draggable="false">',
            '  </div>',
            '  <div id="ps5card_title_col">',
            '    <div id="ps5card_trophy_icon"></div>',
            '    <div id="ps5card_title"></div>',
            '  </div>',
            '</div>',
            '<div id="ps5card_desc"></div>',
            '<div id="ps5card_progress_section">',
            '  <div id="ps5card_progress_label">Total trophy progress</div>',
            '  <div id="ps5card_progress_row">',
            '    <div id="ps5card_game_box"></div>',
            '    <div id="ps5card_percent_text"></div>',
            '  </div>',
            '</div>',
            '<button id="ps5card_action_btn" type="button">' +
            '<span class="ps5card_key">SHIFT</span>' +
            '<span class="ps5card_key_sep">+</span>' +
            '<span class="ps5card_key ps5card_key--tab">TAB</span></button>'
        ].join("");

        outer.appendChild(card);

        var btn = document.getElementById("ps5card_action_btn");
        if (btn) {
            btn.addEventListener("click", function (e) {
                e.preventDefault();
                e.stopPropagation();
                closeNotification();
            });
        }
    }

    function readText(id) {
        var el = document.getElementById(id);
        return el ? (el.textContent || "").trim() : "";
    }

    function toFileUrl(p) {
        p = String(p || "").replace(/\\/g, "/");
        if (!p) return "";
        if (/^file:\/\//i.test(p)) return p;
        if (!/^[A-Za-z]:\//.test(p) && !/^\/\//.test(p)) return "";
        try {
            return encodeURI("file:///" + p.replace(/^\/+/, ""));
        } catch (_) {
            return "";
        }
    }

    function applyGameIcon(gameBox) {
        if (!gameBox) return;

        var varUrl = "";
        try {
            varUrl = (window.getComputedStyle(document.documentElement).getPropertyValue("--gameicon") || "").trim();
        } catch (_) { }
        var m = varUrl.match(/url\(\s*(['"])(.*?)\1\s*\)/i) || varUrl.match(/url\(\s*([^)]+?)\s*\)/i);
        var cssIcon = m && m[2] ? m[2] : (m && m[1] ? m[1] : "");
        var artIcon = (window.__san_obj && window.__san_obj.gamearticon) || "";

        var seeds = [cssIcon, artIcon];
        var lib = "";
        var appid = "";
        for (var s = 0; s < seeds.length; s++) {
            var p = String(seeds[s] || "").replace(/\\/g, "/");
            var mm = p.match(/^(.*\/librarycache)\/(\d+)(?:_icon\.[a-z]+|\/|$)/i);
            if (mm) {
                lib = mm[1];
                appid = mm[2];
                break;
            }
        }
        if (!appid) {
            for (var s2 = 0; s2 < seeds.length; s2++) {
                var p2 = String(seeds[s2] || "").replace(/\\/g, "/");
                var mm2 = p2.match(/\/librarycache\/(\d+)\//i);
                if (mm2) { appid = mm2[1]; lib = p2.slice(0, p2.indexOf("/librarycache/") + "/librarycache".length); break; }
            }
        }

        var candidates = [];
        var style = {};
        var push = function (path, size) {
            var url = toFileUrl(path);
            if (!url) return;
            if (candidates.indexOf(url) !== -1) return;
            candidates.push({ url: url, size: size });
        };

        push(cssIcon, "cover");
        if (lib && appid) {
            push(lib + "/" + appid + "_icon.jpg", "cover");
            push(lib + "/" + appid + "/library_600x900.jpg", "cover");
            push(lib + "/" + appid + "/logo.png", "contain");
            push(lib + "/" + appid + "/library_header.jpg", "cover");
        }
        push(artIcon, "cover");

        var i = 0;
        var next = function () {
            if (i >= candidates.length) return;
            var cand = candidates[i++];
            var probe = new Image();
            probe.onload = function () {
                gameBox.style.setProperty("background-image", 'url("' + cand.url + '")', "important");
                gameBox.style.setProperty("background-size", cand.size, "important");
                gameBox.style.setProperty("background-position", "center", "important");
                gameBox.style.setProperty("background-repeat", "no-repeat", "important");
            };
            probe.onerror = function () {
                next();
            };
            probe.src = cand.url;
        };
        next();
    }

    function populateCardData() {
        var info = (window.__san_info) || {};
        var cardTitle = document.getElementById("ps5card_title");
        var cardDesc = document.getElementById("ps5card_desc");
        var cardIcon = document.getElementById("ps5card_icon");
        var gameBox = document.getElementById("ps5card_game_box");
        var percentText = document.getElementById("ps5card_percent_text");
        var achIconEl = document.getElementById("achicon");

        var title = info.title || readText("title") || "Achievement unlocked";
        if (cardTitle) cardTitle.textContent = title;

        var desc = info.desc || readText("desc") || "";
        if (cardDesc) {
            cardDesc.textContent = desc;
            cardDesc.style.display = desc ? "" : "none";
        }

        if (cardIcon) {
            cardIcon.onerror = function () { this.style.visibility = "hidden"; };
            cardIcon.onload = function () { this.style.visibility = ""; };
            if (achIconEl && achIconEl.src) cardIcon.src = achIconEl.src;
        }

        applyGameIcon(gameBox);

        if (percentText) {
            var pct = null;
            var gp = info.globalprogress;
            if (gp !== undefined && gp !== null && gp !== "") {
                pct = Number(gp);
            }
            if (pct === null && info.total && info.unlockedcount !== undefined && info.unlockedcount !== null) {
                var totalNum = Number(info.total);
                var unlockedNum = Number(info.unlockedcount);
                if (isFinite(totalNum) && totalNum > 0 && isFinite(unlockedNum)) {
                    pct = Math.round((unlockedNum / totalNum) * 100);
                }
            }
            if (pct !== null && isFinite(pct)) {
                percentText.textContent = Math.round(pct) + "%";
            } else {
                percentText.textContent = "";
            }
        }
    }

    function closeNotification() {
        try {
            var achEl = document.getElementById("achcont");
            if (achEl) achEl.style.display = "";
            var card = document.getElementById("ps5card");
            if (card) {
                card.style.transition = "opacity 0.16s ease-out";
                card.style.opacity = "0";
            }
            document.body.style.opacity = "0";

            var ip = ipc();
            var id = window.__san_notifyid;
            isExpanded = false;
            window.__ps5Expanded = false;
            document.body.removeAttribute("expanded");
            document.body.removeAttribute("paused");
            setTimeout(function () {
                if (ip) {
                    try { ip.send("ps5_close_notify", id); } catch (_) { }
                    if (id !== undefined && id !== null) {
                        try { ip.send("notifyfinished", id); } catch (_) { }
                    }
                }
                var staleCard = document.getElementById("ps5card");
                if (staleCard && staleCard.parentNode) staleCard.parentNode.removeChild(staleCard);
            }, 160);
        } catch (_) { }
    }

    function toggleExpand() {
        var now = Date.now();
        if (now - lastToggleTime < 220) return;
        lastToggleTime = now;

        if (!isExpanded) {
            isExpanded = true;
            window.__ps5Expanded = true;
            populateCardData();

            var rect = null;
            try {
                var ach = document.getElementById("achcont");
                if (ach) {
                    var r = ach.getBoundingClientRect();
                    if (r.width > 0 && r.height > 0) {
                        rect = { x: r.left, y: r.top, w: r.width, h: r.height };
                    }
                }
            } catch (_) { }

            document.body.setAttribute("expanded", "");
            document.body.setAttribute("paused", "");
            var achEl = document.getElementById("achcont");
            if (achEl) achEl.style.display = "none";

            if (rect) applyCardSize(rect.w);

            var ip = ipc();
            if (ip) { try { ip.send("ps5_expand_bounds", true, rect); } catch (_) { } }
        } else {
            closeNotification();
        }
    }

    function applyCardSize(w) {
        var card = document.getElementById("ps5card");
        if (!card || !(w > 0)) return;
        card.style.setProperty("width", w + "px", "important");
        card.style.setProperty("height", (w * 0.7896) + "px", "important");
    }

    function armForNotification() {
        resetPs5State();
        initialized = false;
        retries = 0;
        init();
    }

    function watch() {
        init();
        var mo = new MutationObserver(function () {
            var ach = document.getElementById("achcont");
            if (ach && !ach.__ps5Armed) armForNotification();
        });
        mo.observe(document.documentElement, { childList: true, subtree: true });
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", watch);
    } else {
        watch();
    }
})();
