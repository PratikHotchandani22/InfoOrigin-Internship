import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {mount,shallow} from 'enzyme'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("To check if buttons are working or not", () =>
{
    it("Checking if player 1 button is working or not", () =>
    {
        const wrapper = mount(<App/>);
        const buttons = wrapper.find("button");
        const btn1 = buttons.at(0);
        //console.log(btn1.html());
        btn1.simulate('click');
        //checking if button1 is getting disabled or not
        expect(wrapper.state().btn1).toEqual(true);

    })

    it("Checking if player 2 button is working or not", () =>
    {
        const wrapper = mount(<App/>);
        const buttons = wrapper.find("button");
        const btn2 = buttons.at(1);
        //console.log(btn2.html());
        btn2.simulate('click');
        //checking if button2 is getting disabled or not
        expect(wrapper.state().btn2).toEqual(true);
    })
})