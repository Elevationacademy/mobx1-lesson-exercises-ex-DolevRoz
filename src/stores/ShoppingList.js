import { observable, action } from 'mobx'
import { Item } from './Item'


export class ShoppingList {
    // your code here
    @observable list = [];
    @observable length;
    @action checkItem = (name) => {
        // your code here
        // console.log(name);
        let item = this.list.find(i => i.name === name);
        // console.log(this.list);
        item.completed = !item.completed
    }
    @action addItem = (name) => {
        // your code here
        // console.log(name);
        // console.log(this.list);
        let item = new Item(name)
        this.list.push(item);

    }
    @action editItem = (itemName, newLocation) => {
        // your code here
        let x = this.list.find(l => l.name === itemName);
        // console.log(x.name);
        x.location = newLocation;
    }
    @action deleteItem = (itemName) => {
        // your code here
        let itemToDelete = this.list.find(l => l.name === itemName);
        // console.log(itemToDelete);
        let i = this.list.indexOf(itemToDelete);
        // console.log(i);
        this.list.splice(i, 1);
    }
}

