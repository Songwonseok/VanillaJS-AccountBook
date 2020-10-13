import TransactionModel from './models/transactionModel'
import TransactionController from './controllers/transactionController'
import ListView from './views/listView';


const renderTargetWrap = document.querySelector(".content-wrap");

class App {
    constructor(listView) {
        this.currentMonth = new Date().getMonth() + 1;
        this.listView = listView;
    }

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

    getStates = async (path) => {
        switch (path) {
            case "/":
                return { data: '초기' };
            case "/calendar":
                return { data: '달력' };
            case "/statistic":
                return { data: '통계' };

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
        if (!state) {
            state = {
                data: '초기'
            }
        }
        const targetView = this.getPath();

        this.viewMap(targetView);


        this.setInsetStyle(targetView);
    }

    // Pop State
    onRouter = () => {
        window.addEventListener("popstate", this.popStateHandler);
    }


    init = async () => {
        await this.listView.init();
        this.onLink();
        this.onRouter();
        this.popStateHandler({});
    }

    viewMap = (path) => {
        switch(path){
            case '/': 
                // this.listView.render();
                return;
            case '/calendar': 
                renderTargetWrap.innerHTML = `<h2>달력</h2>`
                return;
            case '/statistic' :
                renderTargetWrap.innerHTML = `<h2>통계</h2>`
                return; 
        }
    }
}
const transactionModel = new TransactionModel();

const transactionController = new TransactionController(transactionModel);

const listView = new ListView(renderTargetWrap, transactionController);

const app = new App(listView);

app.init();
