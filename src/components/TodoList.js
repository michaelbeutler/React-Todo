import React from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: props.items
        };
        this.scrollToBottom = this.scrollToBottom.bind(this);
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom() {
        this.el.scrollIntoView({ behavior: 'smooth' });
    }

    render() {
        return (
            <ul className="list-group list-group-flush overflow-auto" style={{ maxHeight: "650px", height: "650px" }}>
                {this.state.items.map(t =>
                    <TodoItem key={t.id} id={t.id} completed={t.completed} text={t.text} />
                )}
                {this.state.items.length < 1 ? <blockquote className="blockquote text-center mt-3">
                    <p className="mb-0">There is nothing todo... have fun</p>
                </blockquote> : ""}
                <div ref={el => { this.el = el; }} />
            </ul>
        )
    }
}