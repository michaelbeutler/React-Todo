import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from './TodoItem';

// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';

it('checkbox is clickable and state updates', () => {
    const item = shallow(<TodoItem id={1} text={"Test todo"} />);
    expect(item.find('label').text()).toEqual('Test todo');
    item.find('input').simulate('change');
    expect(item.state('completed')).toBe(true);
});

it('checkbox value equals props (completed=true)', () => {
    const item = shallow(<TodoItem id={1} completed={true} text={"Test todo"} />);
    expect(item.state('completed')).toBe(true);
});

it('checkbox value equals props (completed=false)', () => {
    const item = shallow(<TodoItem id={1} completed={false} text={"Test todo"} />);
    expect(item.state('completed')).toBe(false);
});

it('checkbox value equals props (completed=undefined)', () => {
    const item = shallow(<TodoItem id={1} text={"Test todo"} />);
    expect(item.state('completed')).toBe(false);
});

it('label style equals props (completed=true)', () => {
    const item = shallow(<TodoItem id={1} completed={true} text={"Test todo"} />);
    expect(item.find('label').props('style').style.textDecoration).toEqual('line-through');
});

it('label style equals props (completed=false)', () => {
    const item = shallow(<TodoItem id={1} completed={false} text={"Test todo"} />);
    expect(item.find('label').props('style').style.textDecoration).toEqual('none');
});

it('label style equals props (completed=undefined)', () => {
    const item = shallow(<TodoItem id={1} text={"Test todo"} />);
    expect(item.find('label').props('style').style.textDecoration).toEqual('none');
});