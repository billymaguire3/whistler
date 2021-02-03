import { render, screen } from '@testing-library/react';
import App from './App';
import WhistlerHeader from './WhistlerHeader';

// Enzyme Config
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Whistler Header', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<WhistlerHeader />);
  })

  test('renders the title of the project', () => {
    expect(wrapper.find('h1').text()).toContain('Whistler: The More Quiet Twitter')
  });
})

describe('Whistle Form', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  })

  test('App renders a form', () => {
    expect(wrapper.find('.whistle-form').exists()).toBeTruthy();
  })

  test('Form renders a label field with correct text', () => {
    expect(wrapper.find('label').text()).toBe('New Whistle Here');
  })

  test('Form renders a text area for new whistles', () => {
    expect(wrapper.find('text-area').exists()).toBeTruthy();
  })

})

