
    var tmp = `
    <style>
    @keyframes keysz {
        0% {
            transform: rotateZ(0deg)
        }
        100% {
            transform: rotateZ(360deg)
        }
    }
    @keyframes keysx {
        0% {
            transform: rotateX(0deg)
        }
        100% {
            transform: rotateX(360deg)
        }
    }
    @keyframes keysy {
        0% {
            transform: rotateY(0deg)
        }
        100% {
            transform: rotateY(360deg)
        }
    }
    .container {
        transform-style: preserve-3d;
        animation: keysz 3s infinite linear
    }
    .containerx {
        transform-style: preserve-3d;
        animation: keysx 3s infinite linear
    }
    .containery {
        transform-style: preserve-3d;
        animation: keysy 3s infinite linear
    }
</style>
<div style="perspective: 500px">
    <div class="container">

    </div>
</div>
    `
    class RotatingContent extends HTMLElement {

        constructor() {
            super()
        }

        connectedCallback() {
            let ch = this.children
            let s = this.attachShadow({ mode: 'open' });
            s.innerHTML = tmp;
            let div = s.querySelector('.container')
            for (let index = 0; index < ch.length; index++) {
                const element = ch[index];
                div.appendChild(element);
            }
            div.setAttribute('style', this.getAttribute('style'));

            let axis = this.getAttribute('axis');
            switch (axis) {
                case 'z':
                    div.setAttribute('class', 'container')
                    break;
                case 'x':
                    div.setAttribute('class', 'containerx')
                    break;
                case 'y':
                    div.setAttribute('class', 'containery')
                    break;
                default:
                div.setAttribute('class', 'container')
                    break;
            }
        }
    }
    customElements.define('r-content', RotatingContent);