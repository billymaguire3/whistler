import { render, screen } from '@testing-library/react';
import App from './App';
import WhistlerHeader from './WhistlerHeader';
import WhistleForm from './WhistleForm';

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
    expect(wrapper.find('textarea').exists()).toBeTruthy();
  })

  test("Form's onChange method functions correctly", () => {
    const sampleWhistle = wrapper.find('textarea');
    sampleWhistle.value = 'This is our sample Whistle';
    sampleWhistle.invoke('onChange', { target: { value: 'This is our sample Whistle' } });
    expect(wrapper).toMatchSnapshot();
  })

  test('Form renders submit button', () => {
    expect(wrapper.find('.submit-btn').exists()).toBeTruthy();
  })

  test('Submission of WhistleForm adds new whistle to the whistles array in state of App', () => {
    const app = mount(<App />);
    const form = mount(<WhistleForm />);
    const mockWhistlesArray = [];
    const mockWhistle = {
      userSelected: 'Billy',
      value: "Billy's mock whistle"
    }
    app.setState({ whistles: [...mockWhistlesArray, mockWhistle] });
    form.find('form').invoke('onSubmit', { target: mockWhistle });
    expect(app).toMatchSnapshot();
  })

})

