import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class Item extends Component {
  checkItem = (e) => {
    //your code here
    this.props.store.checkItem(e.target.value);
  }
  editItem = () => {
    //your code here
    let newLocation = prompt("please edit the location");
    // console.log(newLocation);
    let item = this.props.item.name;
    // console.log(item);
    this.props.store.editItem(item, newLocation);
  }
  deleteItem = () => {
    //your code here
    let item = this.props.item.name;
    this.props.store.deleteItem(item);
  }
  render() {
    // console.log(this.props.store);
    // console.log(this.props.item);
    let item = this.props.item

    return (
      <div className={item.completed ? "crossed" : null} >
        {/*   your code here
            each item should be in an input checkbox
            it should display the item name and location
            it should have both an edit button and a delete button
      */}
        <div>
          <input type="checkbox" onClick={this.checkItem} value={item.name}></input>{item.name} {item.location}
          <button className="editButton" onClick={this.editItem} >edit</button>
          <button className="deleteButton" onClick={this.deleteItem} >delete</button>
        </div>
      </div>)
  }
}

export default Item