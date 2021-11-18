import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        const {title, hapusSatu} = this.props;
        return <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
            <p className="fs-6">{title}</p>
            <div className="hapus">
                <span className="mx-2 text-danger" onClick={hapusSatu}>
                    <i class="bi bi-trash2-fill"></i>
                </span>
            </div>
        </li>
        
    }
}
