class CompGrid extends HTMLElement {
    constructor() {
        super()
        this.init()
    }
    getScreenSizeShortHand() {
        let scr = screen.width;
        return scr >= 1200 ? 'xl' :
            scr >= 960 ? 'lg' :
                scr >= 720 ? 'md' :
                    scr >= 540 ? 'sm' :
                        'xs';
    }
    getMinScreenSizeByShortHand(shorthand) {
        return shorthand == 'xl' ? 1200 :
            shorthand == 'lg' ? 960 :
                shorthand == 'md' ? 720 :
                    shorthand == 'sm' ? 540 :
                        0;
    }
    init() {
        let colsxl = parseInt(this.getAttribute('cols-def-xl'));
        let colslg = parseInt(this.getAttribute('cols-def-lg'));
        let colsmd = parseInt(this.getAttribute('cols-def-md'));
        let colssm = parseInt(this.getAttribute('cols-def-sm'));
        let colsxs = parseInt(this.getAttribute('cols-def-xs'));

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
window.customElements.define('c-grid', CompGrid);
