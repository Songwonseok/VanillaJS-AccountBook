import { $ } from '@utils/common'
import ListView from '@views/main/list/listView'
import StatisticView from '@views/main/statistic/statisticView'
import filterView from '@views/filter/filterView'

export default class NavView {
    constructor(model) {
        this.currentMonth = new Date().getMonth() + 1;
        this.model = model;
        this.listView = new ListView(model);
        this.statisticView = new StatisticView(model);
        this.model.subscribe(this);
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

    update = (data) => {
        const path = location.pathname;
        this.viewMap(path, data);
    }
    // Push State
    onLink = () => {
        document.querySelector("nav ul").addEventListener("click", async (e) => {
            const listNode = e.target.closest("li");
            if (!listNode) return;


            const path = this.getCurrentPath(e, listNode);

            //push state
            history.pushState(null, '', path)

            //render page
            this.popStateHandler();
        })
    }

    popStateHandler = () => {
        const path = location.pathname;
        filterView.reset();
        this.viewMap(path);
        this.setInsetStyle(path);
    }

    // Pop State
    onRouter = () => {
        window.addEventListener("popstate", this.popStateHandler);
    }

    render = ($div) => {
        $div.innerHTML += `<nav>
                    <div id="month">
                    <button class="monthBtn" id="monthDown"><i class="fas fa-angle-left fa-2x"></i></button>
                    <span class="currentMonth no-select">${this.currentMonth}월</span>
                    <button class="monthBtn" id="monthUp"><i class="fas fa-angle-right fa-2x"></i></button>
                    </div>

                    <ul>
                    <li class="selected"><a href="/">내역</a></li>
                    <li><a href="/calendar">달력</a></li>
                    <li><a href="/statistic">통계</a></li>
                    </ul>
                </nav>
                <div class="content-wrap">`
        this.init();
    }

    init = () => {
        this.onLink();
        this.onRouter();
        this.popStateHandler();
        this.onClick();
    }

    onClick = () => {
        const $upBtn = $('#monthUp');
        const $downBtn = $('#monthDown');
        const $div = $('.currentMonth');
        
        $upBtn.addEventListener('click', async (e) => {
            this.currentMonth = (this.currentMonth + 1 === 13) ? 1 : this.currentMonth + 1; 
            $div.innerHTML = `${this.currentMonth}월`
            filterView.reset();
            await this.model.changeData(this.currentMonth);
        })
        $downBtn.addEventListener('click', async (e) => {
            this.currentMonth = (this.currentMonth - 1 === 0) ? 12 : this.currentMonth - 1;
            $div.innerHTML = `${this.currentMonth}월`
            filterView.reset();
            await this.model.changeData(this.currentMonth)
        })
        
    }

    viewMap = (path, data=this.model.list) => {
        const $root = $('.content-wrap');
        switch (path) {
            case '/':
                $root.innerHTML = this.listView.render(data);
                this.listView.onEvent();
                break;
            case '/calendar':
                $root.innerHTML = `<h2>달력</h2>`
                break;
            case '/statistic':
                $root.innerHTML = this.statisticView.render(data);
                this.statisticView.drawChart();
                break;
        }
    }
}
