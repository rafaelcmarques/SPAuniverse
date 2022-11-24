export class Router {
  routes = {}
  add(routeName, link) {
    this.routes[routeName] = link
  }

  route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href)
    console.log("event.target.href: " + event.target.href)
    this.handle()
  }

  handle() {
    const pathname = window.location.pathname
    console.log("pathname: " + pathname)

    const route = this.routes[pathname] || this.routes[404]

    fetch(route)
      .then((data) => data.text())
      .then((html) => (document.querySelector("#app").innerHTML = html))
  }
}
