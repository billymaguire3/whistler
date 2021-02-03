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

