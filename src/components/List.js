import React, { Component } from 'react'
import Item from './Item'

export default class List extends Component {
    render() {
        const {items, hapusSatu}= this.props;
        return (
            <ul className="list-group">
                {items.map(item =>{
                    return(
                        <Item key={item.id} title={item.title} hapusSatu={() => hapusSatu(item.id)}/>
                    );
                })}            
            </ul >
        )
    }
}
