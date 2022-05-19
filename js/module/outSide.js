export default function OutSideClick(el, evts, cb) {
  const html = document.documentElement;
  const outside = "data-outside";
  if (!el.hasAttribute(outside)) {
    el.setAttribute(outside, "");
  }
  const handleOutSideClick = (ev) => {
    if (!el.contains(ev.target)) {
      el.removeAttribute(outside);
      evts.forEach((evt) => {
        html.removeEventListener(evt, handleOutSideClick);
      });
      cb();
    }
  };
  evts.forEach((evt) => {
    setTimeout(() => {
      html.addEventListener(evt, handleOutSideClick);
    });
  });
}
