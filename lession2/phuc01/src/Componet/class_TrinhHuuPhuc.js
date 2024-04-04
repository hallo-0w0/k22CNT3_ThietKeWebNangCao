import React, { Component } from 'react';

export default class ClassTrinhHuuPhuc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: "Trinh huu phuc",
            class: "k22cntt"
        };
        this.users = {
            name: "Trinh HuuPhuc",
            age: 20
        };
    }

    handleChange = (event) => {
        this.setState({
            fullname: "chach van doanh"
        });
    };

    render() {
        return (
            <div>
                <h1>This is class component</h1>
                {this.users.name}-{this.users.age}
                <h2>Hello {this.props.username}! Wellcome to {this.props.name}</h2>
                <hr />
                <h3>Info: {this.props.info}</h3>
                <h3>Time: {this.props.time}</h3>
                <hr />
                <h3>
                    State:
                    <br />
                    Fullname: {this.state.fullname}_
                    <br />
                    Class: {this.state.class}
                </h3>
                <button onClick={this.handleChange}>Change name</button>
            </div>
        );
    }
}
