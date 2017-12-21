class CompGrid extends HTMLElement {
    constructor() {
        super()
        this.init()
    }

    init() {
        let cols = parseInt(this.getAttribute('cols'));
        this.style =
            `
            display: grid;
            grid-template-columns: repeat(${cols}, 1fr);
            grid-auto-rows: minmax(10px, auto);
        `
        this.querySelectorAll('[cols]').forEach(function (v) {
            let colstxt = v.getAttribute("cols")
            let rowstxt = v.getAttribute("rows")
            let s = v.getAttribute('style');
            s = s && !s.endsWith(';') ? s + ";" : s;
            v.setAttribute('style', (s ? s : "") + " grid-column:" + colstxt + ";" + " grid-row:" + rowstxt + ";")
        });
    }
}
window.customElements.define('c-grid', CompGrid);