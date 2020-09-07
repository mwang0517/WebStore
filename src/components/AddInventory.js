import React from 'react'
import axios from 'commons/axios'
import {toast} from 'react-toastify'

class AddInventory extends React.Component{
    state ={
        name:"",
        price:"",
        tags:"",
        image:"",
        status:"available"
    }

    handleChange = e =>{
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]:value
        })
    }

    submit = e =>{
        e.preventDefault();
        const product = {...this.state}
        axios.post("products",product).then(res=>{
            this.props.close(res.data)
            toast.success('Add Success')
        })
    }
    
    render(){
        return(
            <div className="inventory">
                <p className="title has-text-centered">Inventory</p>
                <br />
                <form onSubmit={this.submit}>
                    <div className="field"> 
                        <div className="control">
                            <label className="label">Name</label> 
                            <textarea className="textarea" name="name" onChange={this.handleChange} value={this.state.name}/> 
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <label className="label">price</label> 
                            <input type="number" className="input" name="price" onChange={this.handleChange} value={this.state.price}/> 
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <label className="label">Tags</label> 
                            <input type="text" className="input" name="tags" onChange={this.handleChange} value={this.state.tags}/> 
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <label className="label">Image</label> 
                            <input type="text" className="input" name="image" onChange={this.handleChange} value={this.state.image}/> 
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <label className="label">Status</label> 
                            <div className="select is-fullwidth">
                                <select name="status" onChange={this.handleChange} value={this.state.status}> 
                                    <option>available</option> 
                                    <option>unavailable</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="field is-grouped is-grouped-centered">
                        <div className="control">
                            <button className="button is-link">Submit</button>
                        </div>
                        <div className="control">
                            <button className="button" type="button" onClick={() => this.props.close()}>Cancel</button>
                        </div>
                    </div>
                </form>
            </div>     
        )
    }
}

export default AddInventory