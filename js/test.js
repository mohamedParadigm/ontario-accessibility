(function (F) {
  function u(a, d) {
    var b = h.querySelector(a);
    if (b) return d(b);
    var c = new (l.MutationObserver || l.WebKitMutationObserver)(function () {
      if ((b = h.querySelector(a))) c.disconnect(), d(b);
    });
    c.observe(h, { childList: !0, subtree: !0 });
  }
  function A() {
    var a = new Date();
    a.setTime(a.getTime() + 31536e7);
    document.cookie =
      "UsableNetAssistive=1; expires=" +
      a.toUTCString() +
      "; domain=" +
      v +
      "; path=/";
  }
  function B() {
    document.cookie =
      "UsableNetAssistive=; Max-Age=-99999999; domain=" + v + "; path=/;";
  }
  function w(a) {
    return (
      -1 < ["top-right", "top-left", "bottom-right", "bottom-left"].indexOf(a)
    );
  }
  function q(a) {
    return -1 < ["small", "default"].indexOf(a);
  }
  function m(a, d, b) {
    b = q(b) ? b : "";
    "default" === b && (b = "");
    "small" === b && (b = "36");
    return (
      "background-image:url('https://a40.usablenet.com/pt/c/img/usntA40" +
      (a ? "On" : "Off") +
      d +
      b +
      ".svg')"
    );
  }
  function G(a, d, b) {
    var c = document.getElementById("usntA40start");
    if (c) {
      var k = new URL(c.getAttribute("src")).searchParams,
        e =
          c.getAttribute("breakpoint") ||
          c.dataset.breakpoint ||
          k.get("breakpoint") ||
          "",
        x =
          c.getAttribute("mobile-color") ||
          c.dataset.mobileColor ||
          k.get("mobile-color") ||
          "",
        y =
          c.getAttribute("mobile-position") ||
          c.dataset.mobilePosition ||
          k.get("mobile-position") ||
          "",
        n =
          c.getAttribute("mobile-size") ||
          c.dataset.mobileSize ||
          k.get("mobile-size") ||
          "";
      e &&
        ((e = parseInt(e)),
        isNaN(e) ||
          ((c = function (g) {
            window.innerWidth <= e &&
            (!a.classList.contains("usntA40mobile") || !0 === g)
              ? (a.classList.add("usntA40mobile"),
                w(y) &&
                  (a.classList.remove("usntA40" + b),
                  a.classList.add("usntA40" + y, "usntA40mobile")),
                (g = a.classList.contains("usntA40Enabled")),
                x &&
                  ("dark" === x
                    ? (a.classList.add("usntA40Dark"),
                      a
                        .querySelector("#usntA40Icon")
                        .setAttribute("style", m(g, "D", n)))
                    : "dark" !== x &&
                      (a.classList.remove("usntA40Dark"),
                      a
                        .querySelector("#usntA40Icon")
                        .setAttribute("style", m(g, "L", n)))),
                q(n) &&
                  (a.classList.remove("usntA40-" + f),
                  a.classList.add("usntA40-" + n)))
              : window.innerWidth > e &&
                (a.classList.contains("usntA40mobile") || !0 === g) &&
                (a.classList.remove("usntA40" + y, "usntA40mobile"),
                w(b) && a.classList.add("usntA40" + b),
                (g = a.classList.contains("usntA40Enabled")),
                "dark" === d
                  ? (a.classList.add("usntA40Dark"),
                    a
                      .querySelector("#usntA40Icon")
                      .setAttribute("style", m(g, "D", f)))
                  : "dark" !== d &&
                    a.classList.contains("usntA40Dark") &&
                    (a.classList.remove("usntA40Dark"),
                    a
                      .querySelector("#usntA40Icon")
                      .setAttribute("style", m(g, "L", f))),
                a.classList.remove("usntA40-" + n),
                q(f) && a.classList.add("usntA40-" + f));
          }),
          c(!0),
          window.removeEventListener("resize", c),
          window.addEventListener("resize", c)));
    }
  }
  function z(a) {
    var d = document.getElementById("usntA40Toggle");
    if (!d) {
      var b = document.createElement("style");
      b.styleSheet
        ? (b.styleSheet.cssText =
            '#usntA40Toggle{background:#f5f5f5;box-shadow:0 1px 2px #0000003D;border-radius:28px;display:inline-block!important;position:fixed;bottom:20px;left:20px;z-index:2147483647}#usntA40Toggle.usntA40top-left{top:20px;left:20px;bottom:auto;right:auto}#usntA40Toggle.usntA40top-right{top:20px;right:20px;left:auto;bottom:auto}#usntA40Toggle.usntA40bottom-right{right:20px;left:auto}#usntA40Toggle a#usntA40Link{display:block;padding:13px 0 13px 44px;box-sizing:border-box;position:relative;width:48px;height:48px;overflow:hidden;border-radius:90px;box-sizing:border-box;line-height:18px;background-color:#ebebf0;text-decoration:underline;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);border:2px solid #f5f5f5;color:#363638}#usntA40Toggle a#usntA40Link:focus{box-shadow:0 0 0 3px rgba(235,235,240,.87);outline:0;border-color:#0040dd}#usntA40Toggle i#usntA40Icon{background-color:#f5f5f5;position:absolute;width:44px;height:44px;left:0;top:0;overflow:hidden;background-size:34px;background-repeat:no-repeat;background-position:6px center;border-radius:90px;box-shadow:0 1px 2px #0000003D}#usntA40Toggle a#usntA40Link:focus,#usntA40Toggle.usntA40Expanded a#usntA40Link,#usntA40Toggle:not([class*=usntA40Touch]) a#usntA40Link:hover{min-width:44px;min-height:44px;width:auto;height:auto}#usntA40Toggle div#usntA40Txt{font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif;font-size:14px;font-weight:400;padding-right:12px;transition:margin-left .35s cubic-bezier(.19,1,.22,1);-webkit-transition:margin-left .35s cubic-bezier(.19,1,.22,1);margin-left:-200px;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0)}#usntA40Toggle.usntA40Touch div#usntA40Txt{margin-left:-200px}#usntA40Link:focus div#usntA40Txt,#usntA40Toggle.usntA40Expanded div#usntA40Txt,#usntA40Toggle:not([class*=usntA40Touch]) a#usntA40Link:hover div#usntA40Txt{margin-left:6px}#usntA40Toggle.usntA40Dark a#usntA40Link{background-color:#242426;border-color:#444446;color:#d8d8dc}#usntA40Toggle.usntA40Dark a#usntA40Link:focus{border-color:#409cff;box-shadow:0 0 0 3px rgba(36,36,38,.87)}#usntA40Toggle.usntA40Dark i#usntA40Icon{background-color:#444446}#usntA40Toggle.usntA40bottom-right a#usntA40Link,#usntA40Toggle.usntA40top-right a#usntA40Link{padding:13px 44px 13px 0}#usntA40Toggle.usntA40bottom-right i#usntA40Icon,#usntA40Toggle.usntA40top-right i#usntA40Icon{left:auto;right:0}#usntA40Toggle.usntA40bottom-right div#usntA40Txt,#usntA40Toggle.usntA40top-right div#usntA40Txt{padding-right:0;padding-left:12px}#usntA40Toggle.usntA40-small a#usntA40Link{width:36px;height:36px;padding:7px 0 7px 32px}#usntA40Toggle.usntA40-small i#usntA40Icon{width:32px;height:32px;background-size:22px}#usntA40Toggle.usntA40-small a#usntA40Link:focus,#usntA40Toggle.usntA40-small.usntA40Expanded a#usntA40Link,#usntA40Toggle:not([class*=usntA40Touch]).usntA40-small a#usntA40Link:hover{min-width:32px;min-height:32px;width:auto;height:auto}#usntA40Toggle.usntA40-small.usntA40bottom-right a#usntA40Link,#usntA40Toggle.usntA40-small.usntA40top-right a#usntA40Link{padding:7px 32px 7px 0}#usntA40Toggle.usntA40-small.usntA40bottom-right div#usntA40Txt,#usntA40Toggle.usntA40-small.usntA40top-right div#usntA40Txt{padding-right:3px;padding-left:6px}')
        : b.appendChild(
            document.createTextNode(
              '#usntA40Toggle{background:#f5f5f5;box-shadow:0 1px 2px #0000003D;border-radius:28px;display:inline-block!important;position:fixed;bottom:20px;left:20px;z-index:2147483647}#usntA40Toggle.usntA40top-left{top:20px;left:20px;bottom:auto;right:auto}#usntA40Toggle.usntA40top-right{top:20px;right:20px;left:auto;bottom:auto}#usntA40Toggle.usntA40bottom-right{right:20px;left:auto}#usntA40Toggle a#usntA40Link{display:block;padding:13px 0 13px 44px;box-sizing:border-box;position:relative;width:48px;height:48px;overflow:hidden;border-radius:90px;box-sizing:border-box;line-height:18px;background-color:#ebebf0;text-decoration:underline;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0);border:2px solid #f5f5f5;color:#363638}#usntA40Toggle a#usntA40Link:focus{box-shadow:0 0 0 3px rgba(235,235,240,.87);outline:0;border-color:#0040dd}#usntA40Toggle i#usntA40Icon{background-color:#f5f5f5;position:absolute;width:44px;height:44px;left:0;top:0;overflow:hidden;background-size:34px;background-repeat:no-repeat;background-position:6px center;border-radius:90px;box-shadow:0 1px 2px #0000003D}#usntA40Toggle a#usntA40Link:focus,#usntA40Toggle.usntA40Expanded a#usntA40Link,#usntA40Toggle:not([class*=usntA40Touch]) a#usntA40Link:hover{min-width:44px;min-height:44px;width:auto;height:auto}#usntA40Toggle div#usntA40Txt{font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif;font-size:14px;font-weight:400;padding-right:12px;transition:margin-left .35s cubic-bezier(.19,1,.22,1);-webkit-transition:margin-left .35s cubic-bezier(.19,1,.22,1);margin-left:-200px;transform:translate3d(0,0,0);-webkit-transform:translate3d(0,0,0)}#usntA40Toggle.usntA40Touch div#usntA40Txt{margin-left:-200px}#usntA40Link:focus div#usntA40Txt,#usntA40Toggle.usntA40Expanded div#usntA40Txt,#usntA40Toggle:not([class*=usntA40Touch]) a#usntA40Link:hover div#usntA40Txt{margin-left:6px}#usntA40Toggle.usntA40Dark a#usntA40Link{background-color:#242426;border-color:#444446;color:#d8d8dc}#usntA40Toggle.usntA40Dark a#usntA40Link:focus{border-color:#409cff;box-shadow:0 0 0 3px rgba(36,36,38,.87)}#usntA40Toggle.usntA40Dark i#usntA40Icon{background-color:#444446}#usntA40Toggle.usntA40bottom-right a#usntA40Link,#usntA40Toggle.usntA40top-right a#usntA40Link{padding:13px 44px 13px 0}#usntA40Toggle.usntA40bottom-right i#usntA40Icon,#usntA40Toggle.usntA40top-right i#usntA40Icon{left:auto;right:0}#usntA40Toggle.usntA40bottom-right div#usntA40Txt,#usntA40Toggle.usntA40top-right div#usntA40Txt{padding-right:0;padding-left:12px}#usntA40Toggle.usntA40-small a#usntA40Link{width:36px;height:36px;padding:7px 0 7px 32px}#usntA40Toggle.usntA40-small i#usntA40Icon{width:32px;height:32px;background-size:22px}#usntA40Toggle.usntA40-small a#usntA40Link:focus,#usntA40Toggle.usntA40-small.usntA40Expanded a#usntA40Link,#usntA40Toggle:not([class*=usntA40Touch]).usntA40-small a#usntA40Link:hover{min-width:32px;min-height:32px;width:auto;height:auto}#usntA40Toggle.usntA40-small.usntA40bottom-right a#usntA40Link,#usntA40Toggle.usntA40-small.usntA40top-right a#usntA40Link{padding:7px 32px 7px 0}#usntA40Toggle.usntA40-small.usntA40bottom-right div#usntA40Txt,#usntA40Toggle.usntA40-small.usntA40top-right div#usntA40Txt{padding-right:3px;padding-left:6px}'
            )
          );
      document.head.appendChild(b);
      d = document.createElement("div");
      d.setAttribute("id", "usntA40Toggle");
      d.setAttribute("style", "display:none;");
      d.addEventListener(
        "touchstart",
        function (e) {
          "usntA40Icon" === e.target.id && d.classList.add("usntA40Touch");
        },
        !1
      );
      d.addEventListener(
        "touchend",
        function (e) {
          "usntA40Icon" === e.target.id &&
            e.cancelable &&
            (e.preventDefault(), d.classList.toggle("usntA40Expanded"));
        },
        !1
      );
      b = document.getElementById("usntA40start");
      var c = new URL(b.getAttribute("src")).searchParams;
      b &&
        ((r =
          b.getAttribute("color") || b.dataset.color || c.get("color") || ""),
        (p =
          b.getAttribute("position") ||
          b.dataset.position ||
          c.get("position") ||
          ""),
        (f = b.getAttribute("size") || b.dataset.size || c.get("size") || ""),
        (C = "true" === (b.dataset.track || c.get("track")) || !1),
        w(p) && d.classList.add("usntA40" + p),
        "dark" === r && d.classList.add("usntA40Dark"),
        q(f) && d.classList.add("usntA40-" + f));
    }
    b = m(a, "dark" === r ? "D" : "L", f);
    c = a ? D.status_on : D.status_off;
    var k = "";
    C &&
      (k =
        'data-analytics-label="trackLink:anchorClick" data-analytics-placement="UsableNet:' +
        p +
        '" data-analytics-id="' +
        c +
        '"');
    d.innerHTML =
      '<a href="#" rel="nofollow" id="usntA40Link" onclick="' +
      (a
        ? "return disableUsableNetAssistive(true)"
        : "return enableUsableNetAssistive()") +
      '"' +
      k +
      '><div id="usntA40Txt" role="presentation">' +
      c +
      '</div><i style="' +
      b +
      '" id="usntA40Icon"></i></a>';
    a && d.classList.add("usntA40Enabled");
    G(d, r, p);
    document.body.childNodes.length
      ? document.body.insertBefore(d, document.body.childNodes[0])
      : document.body.appendChild(d);
  }
  function H() {
    u("body", function () {
      var a = h.body.appendChild(h.createElement("div"));
      a.id = "usablenetAssistiveLoader";
      a.setAttribute(
        "style",
        "position:fixed;top:0;width:100vw;line-height:100vh;text-align:center;z-index:2147483647;background:rgba(0,0,0,.5)"
      );
      a.innerHTML =
        '<span role="alert" style="background:#fff;padding:20px 40px;font-size:20px;color:#000;border-radius:5px">Loading...</span>';
      a = location.href;
      a = a.split("#")[0];
      a = a.split("?")[0];
      h.head.appendChild(h.createElement("script")).src =
        "//" + F + "/pt/loader?u=" + encodeURIComponent(a);
      z(!0);
    });
  }
  var l = window,
    h = document,
    t = location,
    E = t.search || "",
    r,
    p,
    f,
    C = !1,
    D = {
      status_on: "Exit Accessibility Mode",
      status_off: "Enable accessibility",
    };
  function getCookieStoreDomain(url) {
    var newURL = typeof url == "string" ? new URL(url) : url;
    var hostname = newURL.hostname;
    var hostnameArray = hostname.split(".");
    if (hostnameArray.length != 2) {
      hostnameArray.shift();
    }
    hostname = "." + hostnameArray.join(".");
    return hostname;
  }
  var v = getCookieStoreDomain(location.href);
  l.unafd = v;
  l.enableUsableNetAssistive = function () {
    A();
    setTimeout(function () {
      t.reload();
    }, 100);
    return !1;
  };
  l.disableUsableNetAssistive = function (a) {
    B();
    a &&
      setTimeout(function () {
        t.reload();
      }, 100);
    return !1;
  };
  0 <= E.indexOf("UsableNetAssistive=false")
    ? (B(),
      u("body", function () {
        z();
      }))
    : -1 != document.cookie.indexOf("UsableNetAssistive=1")
    ? H()
    : 0 <= E.indexOf("UsableNetAssistive=true")
    ? (A(),
      setTimeout(function () {
        t.reload();
      }, 100))
    : u("body", function () {
        z();
      });
})("churchschicken.usablenet.com");
