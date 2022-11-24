import { Router } from "./router.js"
import { Events } from "./events.js"

const events = Events()

events.Events()

const router = new Router()
router.add("/", "/pages/home.html")
router.add("/universe", "/pages/universe.html")
router.add("/exploration", "/pages/exploration.html")

router.handle()

window.route = () => router.route()
window.onpopstate = () => router.handle()

// const routes = {
//   "/universe": "/pages/universe.html",
//   "/exploration": "/pages/exploration.html",
// }

// function route(event) {
//   event = event || window.event
//   event.preventDefault()

//   window.history.pushState({}, "", event.target.href)
//   handle()
// }

// function handle() {
//   const pathname = window.location.pathname

//   const route = routes[pathname] || routes[404]

//   fetch(route)
//     .then((data) => data.text())
//     .then((html) => (document.querySelector("#app").innerHTML = html))
// }

// handle()
