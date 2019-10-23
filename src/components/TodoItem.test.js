import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './TodoItem';

// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TodoItem id={1} text={"Test todo"} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('checkbox is clickable and state updates', () => {
    const item = shallow(<TodoItem id={1} text={"Test todo"} />);
    expect(item.find('label').text()).toEqual('Test todo');
    item.find('input').simulate('change');
    expect(item.state('completed')).toBe(true);
});