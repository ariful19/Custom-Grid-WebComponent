class CompGrid extends HTMLElement {
    constructor() {
        super()
        this.init()
    }
    getScreenSizeShortHand() {
        let scr = screen.width;
        return scr < 540 ? 0 :
            scr < 720 ? 1 :
                scr < 960 ? 2 :
                    scr < 1200 ? 3 : 4
    }
    getIdByShortHand(shorthand) {
        return shorthand == 'xl' ? 4 :
            shorthand == 'lg' ? 3 :
                shorthand == 'md' ? 2 :
                    shorthand == 'sm' ? 1 :
                        0;
    }
    init() {
        let sc = this.getScreenSizeShortHand();
        let elm = this;
        let mqarr = [{ mq: 'xs', val: '' }, { mq: 'sm', val: '' }, { mq: 'md', val: '' }, { mq: 'lg', val: '' }, { mq: 'xl', val: '' }];
        mqarr.forEach(function (v, i, a) {
            let val = elm.getAttribute(`cols-${v.mq}`)
            v.val = val ? parseInt(val) : null
        })


        var mqfinal = mqarr.filter(function (e) {
            return e.val
        }).map(function (v) {
            let dif = elm.getIdByShortHand(v.mq)
            return { mq: v.mq, val: v.val, dif: Math.abs(sc - dif) }
        }).sort(function (e1, e2) {
            let x1 = e1.dif;
            let x2 = e2.dif;
            return x1 - x2
        });
        this.setStyles(mqfinal[0]);
    }
    setStyles(mediaQuery) {
        let mq = mediaQuery.mq;
        let minheightattr = this.getAttribute('row-min-height');
        let minh = minheightattr ? minheightattr : "10px";
        let rootStyle = this.getAttribute('style');
        rootStyle = rootStyle && !rootStyle.endsWith(';') ? rootStyle + ";" : "";
        this.style =
            `${rootStyle}
            display: grid;
            grid-template-columns: repeat(${mediaQuery.val}, 1fr);
            grid-auto-rows: minmax(${minh}, auto);
        `
        let children = this.children;
        for (let index = 0; index < children.length; index++) {
            const v = children[index];
            if (v.hasAttribute("cols-" + mq) && v.hasAttribute("rows-" + mq)) {
                let colstxt = v.getAttribute("cols-" + mq)
                let rowstxt = v.getAttribute("rows-" + mq)
                let s = v.getAttribute('style');
                s = s && !s.endsWith(';') ? s + ";" : s;
                v.setAttribute('style', (s ? s : "") + " grid-column:" + colstxt + ";" + " grid-row:" + rowstxt + ";")
            }
        }
    }
}
window.customElements.define('c-grid', CompGrid);
