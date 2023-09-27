export default function parameterMaker (param, value) {
  const url = new URL(window.location.href)
  const params = new URLSearchParams(url.search)
  params.set(param, value)
  history.pushState(null, null, '?' + params.toString())
}
