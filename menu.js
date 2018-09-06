

class Menu {
    render() {
        const root = document.getElementById('root');
        root.insertAdjacentHTML('afterBegin', '<a href="#items">Товары</a> <a href="#about">О нас</a>')
    }
}

const menu = new Menu();

export default menu;