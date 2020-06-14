class Observer {
  constructor() {
    this.subscribers = []
  }

  notify(value) {
    this.subscribers.forEach(subscriber => subscriber(value))
  }

  subscribe(func) {
    this.subscribers.push(func)
  }

  unsubscribe(func) {
    this.subscribers = this.subscribers.filter(
      subscribedFunc => func !== subscribedFunc
    )
  }
}

let instance = null

export default () => {
  if (!instance) {
    instance = new Observer()
  }

  return instance
}
