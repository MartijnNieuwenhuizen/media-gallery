export default class Video {
  constructor(element, options) {
    this._element = element
    this._options = options

    this._handleClick = this._handleClick.bind(this)

    this._cacheHTMLElements()
    this._addEventListeners()
  }

  _cacheHTMLElements() {
    this._trigger = this._element.querySelector(this._options.triggerSelector)
    this._target = this._element.querySelector(this._options.targetSelector)
  }

  _addEventListeners() {
    this._trigger.addEventListener('click', this._handleClick)
  }

  _handleClick(event) {
    // open video
  }
}
