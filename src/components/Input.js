import React, { Component } from 'react'

export default class Input extends Component {
    render() {
        const {item, hapusSemua, forUbah, forSubmit} = this.props;
        return (
            <div className="card card-body my-3">
                <p className="fs-1 fw-bold">To Do Apps
                </p>
                <form onSubmit={forSubmit}>                    
                    <div className="input-group">                                              
                        <input type="text" className="form-control" placeholder="+ New List" value={item} onChange={forUbah}/>
                    </div>
                    <button type="submit" className="btn btn-primary" style={{width:"50%"}}><i class="bi bi-plus-square-dotted"></i></button>                        
                    <button type="button" className="btn btn-danger" style={{width:"50%"}} onClick={hapusSemua}><i class="bi bi-trash2"></i></button>
                </form>   
                <p className="fw-light" style={{fontSize:"10px"}}>© Abram, Mogandi Timotius</p>       
            </div>
        )
            
    }
}