import React from 'react';


export class NewTask extends React.Component {
    constructor() {
        super();
        this.justSubmit = this.justSubmit.bind(this);
    }

    justSubmit(event) {
        event.preventDefault();
        var input = event.target.querySelector('input');
        var value = input.value;
        if (value == '') {
            input.style.borderColor = 'red';
            input.style.color = 'red';
            input.placeholder = "Enter Some Work";
        }
        else {
            input.style.borderColor = 'dodgerblue';
            input.style.color = 'black';
            input.placeholder = "Add Work";
            input.value = '';
            this.props.updateList(value);
        }
    }

    render() {
        return (
            <form onSubmit={this.justSubmit}>
                <input type="text" id="work" placeholder="Add Work" />
            </form>
        );
    }
}