import menu from './menu';
import ItemsPage from './items';
import AboutPage from './about';

class Router {
    constructor() {
        this.routes = {};
        this.historyRoutes = [];
    }

    setRoutes = (routes) => {
        this.routes = routes;
    }

    onChangeRoute = (e) => {
        const oldUrl = e.oldURL;
        const newUrl = e.newURL;
        if(newUrl !== oldUrl) {
            if(this.historyRoutes.length === 10) {
                this.historyRoutes.shift();
                this.historyRoutes.push(path);
                this.render(newUrl)
            } else {
                this.historyRoutes.push(newUrl);
                this.render(newUrl);
            }
        } else if(newUrl === oldUrl) {
            return
        }
    }

    render = (url) => {
        let urlReg = url.match(/(?<=#).+/);
        console.log(this.historyRoutes);
        for(let key in this.routes) {
            if(key === urlReg[0]) {
                this.routes[key].render();
            }
        }
    }
}


const router = new Router();
router.setRoutes({
    'menu': menu,
    'items': ItemsPage,
    'about': AboutPage
});

export default router;