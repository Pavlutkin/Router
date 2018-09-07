const itemsList = {
    "items":{
        "1": {"name":"item1","quantity":"1","price":"20"},
        "2": {"name":"item2","quantity":"5","price":"5"},
        "3": {"name":"item3","quantity":"3","price":"30"}
    },
    "total": 3
};

class Items {
    constructor() {
        this.items = [];
    }

    setItems = (items) => {
        let itemsArr = [];
        for (let key in items) {
            itemsArr.push(items[key]);
        }
        this.items = itemsArr;
    }

    render() {
        
        const root = document.getElementById('root');
        const itemsList = this.items;

        
        itemsList.forEach((item) => {
            const containerItem = document.createElement('div');
            const name = document.createElement('h1');
            const quantity = document.createElement('p');
            const price = document.createElement('p');

            name.innerHTML = item.name;
            quantity.innerHTML = `Quantity: ${item.quantity}`;
            price.innerHTML = `Price: ${item.price}`;
            containerItem.append(name, quantity, price);
            root.appendChild(containerItem);
        });

        const back = document.createElement('a');
        back.innerHTML = 'Назад';
        back.addEventListener('click', function(e) {
            e.preventDefault();
            window.history.back();
        });
        back.style = 'margin-top: 10px; color:green; text-decoration:underline; cursor:pointer';
        root.appendChild(back);
    }
}

const ItemsPage = new Items();
ItemsPage.setItems(itemsList.items);
export default ItemsPage;