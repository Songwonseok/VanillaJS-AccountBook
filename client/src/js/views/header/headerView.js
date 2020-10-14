class HeaderView {
    constructor(){}
    render($div) {
        $div.innerHTML += `<header>
                    <span>가계부</span>
                </header>`
    }
}

export default new HeaderView();