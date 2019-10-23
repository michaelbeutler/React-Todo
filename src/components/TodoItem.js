import React from 'react';

export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            text: props.text,
            completed: props.completed ? props.completed : false
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange() {
        this.setState({ completed: !this.state.completed });
    }
    render() {
        return (
            <li className="list-group-item">
                <div className="custom-control custom-checkbox">
                    <input checked={this.state.completed} type="checkbox" onChange={this.handleChange} className="custom-control-input" id={"check" + this.state.id} />
                    <label className="custom-control-label" htmlFor={"check" + this.state.id} style={{
                        textDecoration: this.state.completed ? 'line-through' : 'none'
                    }} >{this.state.text}</label>
                </div>
            </li>
        );
    }
}