import React, {Component} from "react";
import {v4 as uuid} from "uuid";
import Input from './components/Input';
import List from './components/List';

class App extends Component{
  // Component List
  state={
    items:[],
    id: uuid(),
    item:""
  };

  forUbah = e =>{
    this.setState({
      item: e.target.value
    });
  };

  // Submit
  forSubmit = e =>{
    e.preventDefault();
    const itemBaru ={
      id: this.state.id,
      title: this.state.item
    }

    const updated=[...this.state.items,itemBaru]

    this.setState({
      items:updated,
      item:'',
      id:uuid()
    });
  };

  hapusSemua = ()=>{
    this.setState({
      items: []
    });
  };

  hapusSatu = id =>{
    const forHapus = this.state.items.filter(item=>item.id !== id);
    this.setState({
      items: forHapus
    });
  };

  render(){
    return(
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-7 mt-2">
            <Input item={this.state.item} hapusSemua={this.hapusSemua} forUbah={this.forUbah} forSubmit={this.forSubmit}/>
            <List items={this.state.items} hapusSatu={this.hapusSatu}/>
          </div>
        </div>
      </div>
    )
  }


}


export default App;
