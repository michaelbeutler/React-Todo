import React from 'react';

export default class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            add: props.add,
            input: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        if (this.state.input.value.length > 0) {
            this.state.add({ text: this.state.input.value });
            this.state.input.value = '';
        }
    }
    handleKeyDown(e) {
        this.setState({ input: e.target });
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="input-group mb-3">
                    <input onKeyDown={this.handleKeyDown} type="text" className="form-control" placeholder="New Todo" aria-label="New Todo" aria-describedby="button-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="submit" id="button-addon2">Add</button>
                    </div>
                </div>
            </form>
        );
    }
}