export default class {
  constructor(element) {
    this._element = element

    this._handleClick = this._handleClick.bind(this)

    this._addEventListeners()
  }

  _addEventListeners() {
    this._element.addEventListener('click', this._handleClick)
  }

  _handleClick() {
    // Because there is no server, this implementation is not build. But this would be the steps:
    //
    // If JS is not executed: it's just a new page request with a larger query (set by the back-end).
    //
    // If JS is running
    // 1. Fetch content from server with HREF
    // 2. Parse the response into HTML
    // 3. Only get the list of elements
    // 4. Select the new amount of elements
    // 5. Place them after the current elements
    // 6. Update the HREF value of the link
  }
}
