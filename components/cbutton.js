class CButton extends HTMLElement {
    get button() {
        return this._button;
    }
    set button(v) {
        this._button = v;
    }
    constructor() {
        super();
    }
    connectedCallback() {
        this.Init();
    }
    Init() {
        let elm = document.createElement('button');
        elm.innerHTML = this.getAttribute("text");
        elm.style.backgroundColor = 'rgb(255,255,255)';
        elm.style.lineHeight = '1.5em';
        elm.style.display = 'inline-block';
        elm.style.boxShadow = '2px 2px 2px 2px rgba(175, 170, 170, 0.73)';
        elm.style.border = 'none';
        elm.style.borderRadius = '2px';
        elm.addEventListener('mouseenter', this.onMouseEnter);
        elm.addEventListener('mouseleave', this.onMouseLeave);
        this.button = elm;
        this.appendChild(elm);
    }
    onMouseEnter(evt) {
        evt.target.style.boxShadow = '1px 1px 1px 1px rgba(175, 170, 170, 0.73)';
    }
    onMouseLeave(evt) {
        evt.target.style.boxShadow = '2px 2px 2px 2px rgba(175, 170, 170, 0.73)';
    }
}
window.customElements.define('c-button', CButton);