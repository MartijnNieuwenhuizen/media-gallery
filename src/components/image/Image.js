// This class should move to a util and be used by the image and video component
// This setup is not ready for it, therefore it's duplicated

import observer from '../../static/js/utils/observer'

export default class Image {
  constructor(element, options) {
    this._element = element
    this._options = options

    this._handleClick = this._handleClick.bind(this)

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
  }

  _addEventListeners() {
    this._trigger.addEventListener('click', this._handleClick)
  }

  _handleClick() {
    this._observer.notify(this._target.innerHTML)
  }
}
