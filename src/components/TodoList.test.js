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

it('rendered all items', () => {
    const list = shallow(<TodoList items={items} />);
    expect(list.html()).toBe("<ul class=\"list-group list-group-flush\"><li class=\"list-group-item\"><div class=\"custom-control custom-checkbox\"><input type=\"checkbox\" class=\"custom-control-input\" id=\"check1\"/><label class=\"custom-control-label\" for=\"check1\" style=\"text-decoration:none\">buy banana</label></div></li><li class=\"list-group-item\"><div class=\"custom-control custom-checkbox\"><input type=\"checkbox\" class=\"custom-control-input\" id=\"check2\"/><label class=\"custom-control-label\" for=\"check2\" style=\"text-decoration:none\">buy apple</label></div></li><li class=\"list-group-item\"><div class=\"custom-control custom-checkbox\"><input type=\"checkbox\" class=\"custom-control-input\" id=\"check3\"/><label class=\"custom-control-label\" for=\"check3\" style=\"text-decoration:line-through\">drink milk</label></div></li></ul>");
});