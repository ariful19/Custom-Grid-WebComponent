class Waiter extends HTMLElement {
    template =
        `
<style>
@keyframes fadeIn {
    0% {
        opacity: 0;       
    }
    100% {
        opacity: 1;       
    }
}
.cover {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(255, 255, 255, .85);
    display: flex;
    align-items: center;
    justify-content: center;
    perspective: 500px;
    z-index: 9999999;
}

@keyframes anim {
    0% {
        opacity: .25;
        transform: translateZ(100px);
        /* animation-timing-function: ease-out; */
    }

    50% {
        opacity: 1;
        animation-timing-function: ease-in-out;
    }

    100% {
        opacity: .25;
        transform: translateZ(-100px);
        /* animation-timing-function: ease-out; */
    }
}

.cover>div {
    font-size: 1.5rem;
    animation: anim 1s alternate infinite;
}
</style>
<div class="cover">
<div>Please Wait ... </div>
</div>
    `;
    root = null;
    static get observedAttributes() { return ['state']; }
    constructor() {
        super();
        var sr = this.attachShadow({ mode: 'closed' })
        sr.innerHTML = this.template;
        this.root = sr;
    }
    attributeChangedCallback(attrName, oldVal, newVal) {
        if (attrName == 'state') {
            var cover = this.root.querySelector('.cover');
            if (newVal === "show") {
                this.style.display = 'flex';
                if (cover)
                    cover.style.animation = "fadeIn .5s forwards";
            } else {
                if (cover) {
                    cover.style.animation = "fadeIn .5s reverse";
                    setTimeout(() => this.style.display = 'none', 500);
                }
            }
        }
    }
}
customElements.define('c-waiter', Waiter)
