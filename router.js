const item = require('./items');
const about = require('./about');
const menu = require('./menu');


class Router {
    constructor() {
        this.routes = [];
        this.historyRoutes = [];
    }

    setRoutes = () => {

    }

    onChangeRoute = () => {
        const path = window.location.href;
        let prevPath = this.historyRoutes[this.historyRoutes.length-1];
        if(path !== prevPath) {
            if(this.historyRoutes.length === 10) {
                this.historyRoutes.shift();
                this.historyRoutes.push(path);
            } else {
                this.historyRoutes.push(path);
            }
        }
    }

    historyRoutes = () => {

    }

    render = (page) => {
        rootPage = 
        page.render();
    }
}