class CompGrid extends HTMLElement {
    constructor() {
        super()
        this.init()
    }

    init() {
        let cols = parseInt(this.getAttribute('cols'));
        let minheightattr = this.getAttribute('row-min-height');
        let minh = minheightattr ? minheightattr : "10px";
        this.style =
            `
    display: grid;
    grid-template-columns: repeat(${cols}, 1fr);
    grid-auto-rows: minmax(${minh}, auto);
`
        this.querySelectorAll('[cols][rows]').forEach(function (v) {
            let colstxt = v.getAttribute("cols")
            let rowstxt = v.getAttribute("rows")
            let s = v.getAttribute('style');
            s = s && !s.endsWith(';') ? s + ";" : s;
            v.setAttribute('style', (s ? s : "") + " grid-column:" + colstxt + ";" + " grid-row:" + rowstxt + ";")
        });
    }
}
window.customElements.define('c-grid', CompGrid);