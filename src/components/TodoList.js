import React from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: props.items
        };
    }
    render() {
        return (
            <ul className="list-group list-group-flush">
                {this.state.items.map(t => 
                    <TodoItem key={t.id} id={t.id} completed={t.completed} text={t.text} />
                )}
            </ul>
        )
    }
}