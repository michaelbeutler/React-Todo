import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';

// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';

const items = [
    { id: 1, completed: false, text: "buy banana" },
    { id: 2, completed: false, text: "buy apple" },
    { id: 3, completed: true, text: "drink milk" },
]

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TodoList items={items} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('store items in state', () => {
    const list = shallow(<TodoList items={items} />);
    expect(list.state('items').length).toBe(3);
});