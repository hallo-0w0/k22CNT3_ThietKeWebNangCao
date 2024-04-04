import React from 'react';

export default function FuncJSXTrinhHuuPhuc(props) {
    const users = {
        name: "Trinh HuuPhuc",
        age: 20
    };
    return (
        <div>
            <h2>Function component demo</h2>
            <h3>
                Welcome to, {users.name} - {users.age}
            </h3>
            <hr />
            <h3>
                Props:
                <br />Fullname: {props.fullName}
                <br />Age: {props.age}
            </h3>
        </div>
    );
}
