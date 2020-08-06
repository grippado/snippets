function inViewport(element: any) {
  const rt = element.getBoundingClientRect()
  return (
      rt.top >= 0 &&
      rt.left >= 0 &&
      rt.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rt.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}