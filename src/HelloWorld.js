import React from "react";




// function User(props) {
//     return <div>Hello, {props.name}</div>
// }
class User extends React.Component{
    render(){
        return <h1>Hello, {this.props.name}</h1>
    }
}
function HelloWorld(props) {
    return (
        <div className="HelloWorld">
            <User name="A User" />
            <User name="B User" />
            <User name="C User" />
        </div>
    );
}

export default HelloWorld;
