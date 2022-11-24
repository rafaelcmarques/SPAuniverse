export function Events() {
  const universe = document.querySelector("#universe")
  const home = document.querySelector("#home")
  const exploration = document.querySelector("#exploration")

  universe.addEventListener("click", () => {
    document.querySelector("body").style.backgroundImage =
      "url(assets/mountains-universe-2.png)"
  })

  home.addEventListener("click", () => {
    document.querySelector("body").style.backgroundImage =
      "url(assets/mountains-universe-1.png)"
  })

  exploration.addEventListener("click", () => {
    document.querySelector("body").style.backgroundImage =
      "url(assets/mountains-universe-3.png)"
  })
  return {
    Events,
  }
}
