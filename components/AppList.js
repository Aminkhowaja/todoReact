import React from 'react';


export class AppList extends React.Component {
    constructor() {
        super();
        this.remove = this.remove.bind(this);
    }

    remove(element) {
        var value = element.target.parentNode.querySelector('span').innerText;
        this.props.remove(value);
    }

    render() {
        var items = this.props.tasks.map((element, i) => {
            return <li key={i}><span>{element}</span><img src='components/images/del.png' onClick={this.remove}/><hr/></li>
        });
        return (
            <div id="added">
                <ul id="addedWork">
                    {items}
                </ul>
            </div>
        );
    }
}