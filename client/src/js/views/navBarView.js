class NavBarView {
    constructor() {
        this.viewMap = {
            '/'(data) {
                return `<h2>${data}</h2>`
            },
            '/calendar'(data) {
                return `<h2>${data}</h2>`
            },
            '/statistic'(data) {
                return `<h2>${data}</h2>`
            }
        }
    }

    // Util
    getPath = () => {
        return location.pathname;
    }

    setInsetStyle = (pathName) => {
        const styleName = "selected";
        document.querySelector(`.${styleName}`)?.classList.remove(styleName)

        const node = document.querySelector(`nav li>a[href='${pathName}'`);
        node.closest("li").classList.toggle(styleName);
    }

    getCurrentPath = (e, listNode) => {
        if (e.target.nodeName === "A") e.preventDefault();
        const path = listNode.querySelector("a").getAttribute("href");
        return path;
    }

    getStates = async(path) => {
        switch (path) {
            case "/":
                return {data: '초기'};
            case "/calendar":
                return {data: '달력'};
            case "/statistic":
                return {data: '통계'};
            
        }
    }

    // render
    render = (renderTarget, sHTML) => {
        renderTarget.innerHTML = sHTML;
    }

    // Push State
    onLink = () => {
        document.querySelector("nav ul").addEventListener("click", async (e) => {
            const listNode = e.target.closest("li");
            if (!listNode) return;


            const path = this.getCurrentPath(e, listNode);
            const state = await this.getStates(path);


            //push state
            history.pushState(state, '', path)

            //render page
            this.popStateHandler({ state });
        })
    }

    popStateHandler = ({ state }) => {
        if(!state){
            state = {
                data:'초기'
            }
        }
        const renderTargetWrap = document.querySelector(".content-wrap");
        const targetView = this.getPath();

        console.log(state);
        const contentViewHTML = this.viewMap[targetView](state?.data);


        this.render(renderTargetWrap, contentViewHTML);

        this.setInsetStyle(targetView);
    }

    // Pop State
    onRouter = () => {
        window.addEventListener("popstate", this.popStateHandler);
    }


    init = () => {
        this.onLink();
        this.onRouter();
        this.popStateHandler({});
    }
}

export default NavBarView;
