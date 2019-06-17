import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {mount,shallow} from 'enzyme'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("to check if states are changing or not", () =>
{
    it("To check if classes of buttons are changing or not", () =>
    {
        const wrapper = mount(<App/>);
        const buttons = wrapper.find("button");
        const btnval = buttons.at(3);
        btnval.simulate('click');
        if(wrapper.state().class1 === 'red')
        {
            expect(wrapper.state().class2).toEqual('green');
            expect(wrapper.state().class3).toEqual('yellow');
        }
        if(wrapper.state().class1 === 'yellow')
        {
            expect(wrapper.state().class2).toEqual('red');
            expect(wrapper.state().class3).toEqual('green');
        }
        if(wrapper.state().class1 === 'green')
        {
            expect(wrapper.state().class2).toEqual('yellow');
            expect(wrapper.state().class3).toEqual('red');
        }

    })
})