let temp =
    `
<div style="overflow: hidden;">
    <style>
       
    </style>
    <div id="container" style="display: flex;" class="animated">
    </div>
</div>
`

let style =
    `
@keyframes movetoleft {
    0%{
        transform: translateX(0)
    }
    100%{
        transform: translateX(-:widthpx)
    }
}
.animated{
    animation: movetoleft :times infinite linear;
}
span{
    width: auto;
    white-space: nowrap;
    margin-left:30px
}
`

class CNews extends HTMLElement {
    constructor() {
        super()
        this.init()
    }
    init() {
        let content = this.innerHTML;
        this.innerHTML = temp;
        let cont = this.querySelector('#container')
        cont.innerHTML = content
        let spans = this.querySelectorAll('span')
        let w = 0;
        for (let index = 0; index < spans.length; index++) {
            const element = spans.item(index);
            w += element.getBoundingClientRect().width + 15;
        }
        cont.style.width = w + 'px'
        style = style.replace(':time', (spans.length * 9).toString()).replace(':width', w)
        this.querySelector('style').innerHTML = style;
        cont.appendChild(spans.item(0).cloneNode(true))
        cont.appendChild(spans.length > 1 ? spans.item(1).cloneNode(true) : spans.item(0).cloneNode(true))
    }
}
if (window.customElements) {
    customElements.define('c-news', CNews)
} else {
    let root = document.querySelector('c-news');
    let content = root.innerHTML;
    root.innerHTML = temp;
    let cont = root.querySelector('#container')
    cont.innerHTML = content
    let spans = root.querySelectorAll('span')
    let w = 0;
    for (let index = 0; index < spans.length; index++) {
        const element = spans.item(index);
        w += element.getBoundingClientRect().width + 15;
    }
    cont.style.width = w + 'px'
    style = style.replace(':time', (spans.length * 9).toString()).replace(':width', w)
    root.querySelector('style').innerHTML = style;
    cont.appendChild(spans.item(0).cloneNode(true))
    cont.appendChild(spans.length > 1 ? spans.item(1).cloneNode(true) : spans.item(0).cloneNode(true))
}
