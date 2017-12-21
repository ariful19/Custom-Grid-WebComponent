let html = ` 
    <style>
        .cbtn {
            transform: rotateZ(10deg);
        }
    </style>
    <button class="cbtn"></button>
`

class CButton extends HTMLElement {
    constructor() {
        super();
        this.Init()
    }
    Init() {
        this.Shadow = this.attachShadow({ mode: 'open' })
        this.Shadow.innerHTML = html
        let btn = this.Shadow.querySelector(".cbtn")
        let txt = this.getAttribute("text")
        btn.innerHTML = txt
        let n = this.getAttribute("repeat")
        if (n) {
            let nn = parseInt(n);
            for (let index = 1; index < nn; index++) {
                btn.innerHTML += " " + txt
            }
        }
    }

}
window.customElements.define('c-button', CButton);