import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {mount,shallow} from 'enzyme'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("To check if class name is changing or not", () =>
{
    it("Checking if Class of filed 1 and 3 is chaning or not",() =>
    {
        const wrapper = mount(<App/>);
        const button = wrapper.find("button");
        button.simulate('click');
        if(Math.round(wrapper.state().val1) < Math.round(wrapper.state().val2) && Math.round(wrapper.state.val2) % Math.round(wrapper.state.val1)===0)
        {
            console.log("you have given correct input for min");
            expect(wrapper.state().class1).toEqual("right");
            
        }
        else if(Math.round(wrapper.state().val1)>=Math.round(wrapper.state().val2))
        {
            console.log("you have given incorrect input for min");
            expect(wrapper.state().class1).toEqual("wrong");
        }
        else if(Math.round(wrapper.state.val2) % Math.round(wrapper.state.val1 !==0))
        {
            console.log("you have given incorrect input for min");
            expect(wrapper.state().class1).toEqual("wrong");
        }
    
        if(Math.round(wrapper.state().val3)<Math.round(wrapper.state()).val2 && Math.round(wrapper.state.val2)%Math.round(wrapper.state.val3===0) && Math.round(wrapper.state().val3)<=Math.round(wrapper.state().val1))
        {

            console.log("you have given correct input");
            expect(wrapper.state().class3).toEqual("right");
        }
        else if(Math.round(wrapper.state().val3)>=Math.round(wrapper.state().val2))
        {
            console.log("you have given incorrect input to mul");
            expect(wrapper.state().class3).toEqual("wrong");
        }
        else if(Math.round(wrapper.state.val2)%Math.round(wrapper.state.val3 !==0))
        {
            console.log("you have given incorrect input to mul");
            expect(wrapper.state().class3).toEqual("wrong");
        }
        else if(Math.round(wrapper.state().val3)>Math.round(wrapper.state().val1))
        {
            console.log("you have given incorrect input to mul");
            expect(wrapper.state().class3).toEqual("wrong");
        }
        

    })
})