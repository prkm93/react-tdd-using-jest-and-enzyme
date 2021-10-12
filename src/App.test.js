import { render, screen } from '@testing-library/react';
import App from './App';
import Counter from './Counter';
// setup file
import {shallow, mount } from 'enzyme';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


describe("Counter testing", () => {

  let wrapper;

  beforeEach(() => {
     wrapper = shallow(<Counter/>);
     console.log(wrapper.debug());
  })

  test("render title of counter",  () => {
    expect(wrapper.find('h1').text()).toContain('This is counter');
  })

  test("render button with text increment", () => {
    expect(wrapper.find('#increment-btn').text()).toBe('Increment');
  })

  test("render button with text decrement", () => {
    expect(wrapper.find('#decrement-btn').text()).toBe('Decrement');
  })

  test("render the initial value of state in div", () => {
    expect(wrapper.find('#counter-value').text()).toBe("0");
  })

  test("render the click event of increment button and increment counter value", () => {
    wrapper.find('#increment-btn').simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("1");
  })
 
  test("render the click event of decrement button and decrement the counter value", () => {
    wrapper.find("#decrement-btn").simulate('click');
    expect(wrapper.find('#counter-value').text()).toBe("-1");
  })

  test("render the click event of decrement button and disable btn when counter value < 0", () => {
    wrapper.find("#decrement-btn").simulate('click')
    const val = wrapper.find('#counter-value').text();
    if (val < 0) {

    }
  })
})