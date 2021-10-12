import { render, screen } from '@testing-library/react';
import App from './App';
// setup file
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


describe("Counter testing", () => {

  let wrapper;

  beforeEach(() => {
     wrapper = shallow(<App/>);
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
})