

class Item {
    constructor() {
        this.itemsList = {
            "items":{
                "1": {"name":"item1","quantity":"1","price":"20"},
                "2": {"name":"item2","quantity":"5","price":"5"},
                "3": {"name":"item3","quantity":"3","price":"30"}
            },
            "total": 3
        };
    }

    render() {
        
        const root = document.getElementById('root');
        const itemsList = this.itemsList.items;
        const total = this.itemsList.total;

        const containerItem = document.createElement('div');
        const name = document.createElement('h1');
        const quantity = document.createElement('p');
        const price = document.createElement('p');
        for(let i = 1; i >= total; i++) {
            let item = itemsList[i];
            
            name.innerHTML = item.name;
            quantity.innerHTML = `Quantity: ${item.quantity}`;
            price.innerHTML = `Price: ${item.price}`;
            containerItem.append(name, quantity, price);
            root.appendChild(containerItem);
        }

        // for(let key in itemsList.items) {
        //     name.innerHTML = itemsList.items[key].name;
        //     quantity.innerHTML = `Quantity: ${itemsList.items[key].quantity}`;
        //     price.innerHTML = `Price: ${itemsList.items[key].price}`;
        //     containerItem.append(name, quantity, price);
        //     root.appendChild(containerItem);
        // }
    }
}

const ItemsPage = new Item();
export default ItemsPage;