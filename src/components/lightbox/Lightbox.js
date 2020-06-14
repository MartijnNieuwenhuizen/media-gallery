import observer from '../../static/js/utils/observer'

export default class Lightbox {
  constructor(element, options) {
    this._element = element
    this._options = options

    this._handleClick = this._handleClick.bind(this)
    this.open = this.open.bind(this)

    this._cacheHTMLElements()
    this._connectObserver()
    this._addEventListeners()
  }

  _cacheHTMLElements() {
    this._trigger = this._element.querySelector(this._options.triggerSelector)
    this._target = this._element.querySelector(this._options.targetSelector)
  }

  _connectObserver() {
    this._observer = observer()
    this._observer.subscribe(this.open)
  }

  _addEventListeners() {
    this._trigger.addEventListener('click', this._handleClick)
  }

  _handleClick() {
    this.close()
  }

  /**
   * Set received HTML into the lightbox inner element and make the lightbox visible
   * @param {String} htmlElement
   */
  open(htmlElement) {
    this._target.innerHTML = htmlElement
    this._element.classList.add('lightbox--visible')
  }

  close() {
    this._element.classList.remove('lightbox--visible')
  }
}
