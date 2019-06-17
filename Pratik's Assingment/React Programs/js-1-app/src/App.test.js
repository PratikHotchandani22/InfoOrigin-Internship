import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {mount,shallow} from 'enzyme'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("to check if the states are changing" , () =>
{
  it("colour of red should change",() =>
  {
    const wrapper = mount(<App/>);
    //console.log(wrapper);
    const buttons = wrapper.find("button");
    const btnred = buttons.at(0);
    //console.log(btnred.html());
    btnred.simulate('click');
    expect(wrapper.state().idbtn1).toEqual("Btnred");
  })
  
  it("colour of green should change",()=>{
    const wrapper = mount(<App/>);
    const buttons = wrapper.find("button");
    const btngreen = buttons.at(1);
    btngreen.simulate('click');
    expect(wrapper.state().idbtn2).toEqual("Btngreen");
  })

  it("colour of yellow should change",() =>
  {
    const wrapper = mount(<App/>);
    const buttons = wrapper.find("button");
    const btnyellow = buttons.at(2);
    btnyellow.simulate('click');
    expect(wrapper.state().idbtn3).toEqual("Btnyellow");

  })
})