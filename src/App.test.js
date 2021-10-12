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
  test("render title of counter",  () => {
    const wrapper = shallow(<App/>);
    
  })
})