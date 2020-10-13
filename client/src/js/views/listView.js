class ListView{
    constructor(content, controller){
        this.content = content;
        this.controller = controller
        this.list = [];
    }

    update = (list) => {
        this.list = list;
        this.render();
    }

    render = () => {
        let str = this.list.reduce((acc, item) => {
            return acc += `<h2>${item.content}  ${item.price}</h2>`
        }, '')

        this.content.innerHTML = str;
    }

    init = async () => {
        await this.controller.getInitialData();
        this.list = this.controller.model.list;
    }
}

export default ListView;