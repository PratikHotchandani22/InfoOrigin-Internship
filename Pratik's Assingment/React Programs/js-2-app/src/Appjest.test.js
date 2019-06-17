import React from 'react';
import App from './App';
import {mount,shallow} from 'enzyme'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { italic } from 'ansi-colors';
configure({ adapter: new Adapter() });

describe("Checking if we get right answer",() =>
{
    it("checking ADD button",() =>
    {
        const wrapper = mount(<App/>)
        const buttons = wrapper.find("button");
        const addbtn = buttons.at(0);
        console.log(addbtn.html());
        addbtn.simulate("click");
        expect(Number(wrapper.state().btn1 + wrapper.state().btn2)).toEqual(Number(wrapper.state().p));
    })

    it("checking SUB button",() =>
    {
        const wrapper = mount(<App/>)
        const buttons = wrapper.find("button");
        const subbtn = buttons.at(1);
        console.log(subbtn.html());
        subbtn.simulate("click");
        expect(Number(wrapper.state().btn1 - wrapper.state().btn2)).toEqual(Number(wrapper.state().p));
    })

    it("checking MUL button",() =>
    {
        const wrapper = mount(<App/>)
        const buttons = wrapper.find("button");
        const mulbtn = buttons.at(2);
        console.log(mulbtn.html());
        mulbtn.simulate("click");
        expect(Number(wrapper.state().btn1 * wrapper.state().btn2)).toEqual(Number(wrapper.state().p));
    })

    it("checking DIV button",() =>
    {
        const wrapper = mount(<App/>)
        const buttons = wrapper.find("button");
        const divbtn = buttons.at(3);
        console.log(divbtn.html());
        divbtn.simulate("click");
        expect(Number(wrapper.state().btn1 / wrapper.state().btn2)).toEqual(Number(wrapper.state().p));
    })

    
})