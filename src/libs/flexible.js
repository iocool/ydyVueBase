(function (doc, win) {
  let docEl = doc.documentElement
  let isIOS = navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  let dpr = isIOS ? Math.min(win.devicePixelRatio, 3) : 1
  dpr = window.top === window.self ? dpr : 1 // 被iframe引用时，禁止缩放
  let resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize'
  docEl.dataset.dpr = dpr
  let recalc = function () {
    let width = docEl.clientWidth
    if (width / dpr > 750) {
      width = 750
    }
    docEl.dataset.width = width
    docEl.style.fontSize = width / 7.5 + 'px' // 设计图是750，除以7.5,每份就是100px
  }
  recalc()
  if (!doc.addEventListener) return
  win.addEventListener(resizeEvt, recalc, false)
})(document, window)
