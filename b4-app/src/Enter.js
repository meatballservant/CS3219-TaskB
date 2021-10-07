import React, { Component } from "react";

class Enter extends Component {
    constructor(props){
        super(props)

    this.state = { gender : "Male"}

    }

    handleChange = (evt) => {
        const value = evt.target.value;
        this.setState({
            ...this.state,
            [evt.target.name]: value
        });
        // console.log(this.state)
    }

    onSubmit = evt =>{
        evt.preventDefault();
        fetch("/account",
        {
            method : 'POST',
            dataType: "JSON",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        })
        .then(() => console.log(JSON.stringify(this.state)))
        // .then(response => response.json())
        // .then(data => this.setState({description: data.message}));
    }

    render() {
        return (
            <div>
            <h2 style={{marginBottom:50}}>Create a user account</h2>
            <form onSubmit={this.onFormSubmit}>
            <label>
            Name:
            <input
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleChange}
                style={{marginBottom:10}}/>
            </label>
            <br />
            <label>
            Gender:
                <select name="gender" onChange={this.handleChange} value={this.state.gender} style={{marginBottom:10}}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </label>
            <br />
            <label>
            Email:
            <input
                name="email"
                type="text"
                value={this.state.email}
                onChange={this.handleChange}
                style={{marginBottom:10}}/>
            </label>
            <br />
            <label>
            Handphone no:
            <input
                name="phone"
                type="text"
                value={this.state.phone}
                onChange={this.handleChange}
                style={{marginBottom:10}}/>
            </label>
        </form>
            <button onClick={this.onSubmit} style={{marginBottom:10}}>
                Submit
            </button>
            {/* {this.state.description} */}
            </div>
            
        );
    }
}

export default Enter;