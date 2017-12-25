class CompGrid extends HTMLElement {
    constructor() {
        super()
        this.init()
    }

    init() {
        let cols = parseInt(this.getAttribute('cols-def'));
        let minheightattr = this.getAttribute('row-min-height');
        let minh = minheightattr ? minheightattr : "10px";
        let rootStyle = this.getAttribute('style');
        rootStyle = rootStyle && !rootStyle.endsWith(';') ? rootStyle + ";" : "";
        this.style =
            `${rootStyle}
            display: grid;
            grid-template-columns: repeat(${cols}, 1fr);
            grid-auto-rows: minmax(${minh}, auto);
        `
        let children = this.children;
        for (let index = 0; index < children.length; index++) {
            const v = children[index];
            if (v.hasAttribute("cols") && v.hasAttribute("rows")) {
                let colstxt = v.getAttribute("cols")
                let rowstxt = v.getAttribute("rows")
                let s = v.getAttribute('style');
                s = s && !s.endsWith(';') ? s + ";" : s;
                v.setAttribute('style', (s ? s : "") + " grid-column:" + colstxt + ";" + " grid-row:" + rowstxt + ";")
            }
        }

    }
}
if (window.customElements)
    window.customElements.define('c-grid', CompGrid);
else {
    //brut force for firefox and edge
    setInterval(() => {
        let elements = document.querySelectorAll('c-grid:not([c-touched="true"])');
        if (elements.length == 0) {
            return;
        }
        for (let index = 0; index < elements.length; index++) {
            let el = elements.item(index);
            let div = document.createElement('div');
            div.setAttribute('c-greedroot', "true");
            let cols = parseInt(el.getAttribute('cols-def'));
            let minheightattr = el.getAttribute('row-min-height');
            let minh = minheightattr ? minheightattr : "10px";
            let rootStyle = el.getAttribute('style');
            rootStyle = rootStyle && !rootStyle.endsWith(';') ? rootStyle + ";" : "";
            div.style =
                `${rootStyle}
                display: grid;
                grid-template-columns: repeat(${cols}, 1fr);
                grid-auto-rows: minmax(${minh}, auto);
            `
            let children = el.children;
            for (let index = 0; index < children.length; index++) {
                const v = children[index];
                if (v.hasAttribute("cols") && v.hasAttribute("rows")) {
                    let colstxt = v.getAttribute("cols")
                    let rowstxt = v.getAttribute("rows")
                    let s = v.getAttribute('style');
                    s = s && !s.endsWith(';') ? s + ";" : s;
                    v.setAttribute('style', (s ? s : "") + " grid-column:" + colstxt + ";" + " grid-row:" + rowstxt + ";")
                }
                div.appendChild(v.cloneNode(true));
            }
            el.innerHTML = "";
            el.appendChild(div)
            el.setAttribute('c-touched', "true")
        }
    }, 100)
}