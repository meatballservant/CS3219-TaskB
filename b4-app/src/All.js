import React, { Component } from "react";
class All extends Component {

    constructor(props){
        super(props)

    this.state = {}
    }

    componentDidMount() {
        // Simple GET request using fetch
        fetch('/account')
            .then(response => response.json())
            .then(data => this.setState({users: data.data}));
            // .then( data => {console.log(data)})
    }

    render() {
        return (
            <div>
            <h2 style={{marginBottom:50}}>All users</h2>
            {this.state.users?.map(function(user, i){
            return <li key={i}> User : {user.name} ||  Gender : {user.gender} || Email : {user.email} || Handphone No : {user.phone}</li>
            })}
            </div>
        );
    }
}

export default All;