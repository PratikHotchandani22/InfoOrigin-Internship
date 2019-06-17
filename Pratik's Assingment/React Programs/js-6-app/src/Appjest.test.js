import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {mount,shallow} from 'enzyme'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("to check if the buttons are working or not",() =>
{
    it("Checking if button 1 is working or not",()=>
    {
        const wrapper = mount(<App/>);
        const buttons = wrapper.find("button");
        const btn1 = buttons.at(0);
        console.log(btn1.html());
        btn1.simulate('click');
        expect(wrapper.state().val1).toEqual(1);
    })

    it("Checking if button 2 is working or not " , () =>
    {
        const wrapper = mount(<App/>);
        const buttons = wrapper.find("button");
        const btn2 = buttons.at(1);
        console.log(btn2.html());
        btn2.simulate('click');
        expect(wrapper.state().val2).toEqual(1);
    })

    it("Checking if button 3 is working or not ", ()=>
    {
        const wrapper = mount(<App/>);
        const buttons = wrapper.find("button");
        const btn3 = buttons.at(2);
        console.log(btn3.html());
        btn3.simulate('click');
        expect(wrapper.state().val3).toEqual(1);
    })
    
    it("Checking if validation button  is working or not", ()=>
    {
        const wrapper = mount(<App/>);
        const buttons = wrapper.find("button");
        const val = buttons.at(3);
        console.log(val.html());
        val.simulate('click');

        //if no buttons is pressed
        if(wrapper.state().temp === 0)
        {
            expect(wrapper.state().val1).toEqual(1);
            expect(wrapper.state().val2).toEqual(1);
            expect(wrapper.state().val3).toEqual(1);
        }


        //if one or more of the buttons are pressed
        else
        {
            if(this.state.a1 === false || this.state.a2 === false || this.state.a3 === false)
            {
                if(this.state.a1 === false)
                {
                    expect(wrapper.state().c1).toEqual(wrapper.state().temp);
                    expect(wrapper.state().val1).toEqual(wrapper.state().val1 + 1);
                }
                if(this.state.a2 === false)
                {
                    expect(wrapper.state().c2).toEqual(wrapper.state().temp);
                    expect(wrapper.state().val2).toEqual(wrapper.state().val2 + 1);
                }
                if(this.state.a3 === false)
                {
                    expect(wrapper.state().c3).toEqual(wrapper.state().temp);
                    expect(wrapper.state().val3).toEqual(wrapper.state().val3 + 1);
                }
            }
            else
            {
                if(wrapper.state().a1 === true && wrapper.state().a2 === true && wrapper.state().a3=== true)
                {
                    if(wrapper.state().c1 < wrapper.state().c2 && wrapper.state().c1<wrapper.state().c3)
                    {
                        expect(wrapper.state().val1).toEqual(wrapper.state().val1 + 1);
                    }

                    else if(wrapper.state().c2 < wrapper.state().c1 && wrapper.state().c2<wrapper.state().c3)
                    {
                        expect(wrapper.state().val2).toEqual(wrapper.state().val2 + 1);
                    }
                    else 
                    {
                        expect(wrapper.state().val3).toEqual(wrapper.state().val3 + 1);
                    }
                }
            }
        }

    })
})
