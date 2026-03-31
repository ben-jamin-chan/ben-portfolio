export function scrollToId(targetId: string, offset = 88) {
  const target = document.getElementById(targetId);

  if (!target) {
    return;
  }

  const top = target.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top: Math.max(top, 0),
    behavior: "smooth",
  });
}
