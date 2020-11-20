import App from './App';
import { shallow } from 'enzyme'
import { findByTestAttr } from '../test/testUtils'

test('renders learn react link', () => {
  const wrapper = shallow(<App />);
  const container = findByTestAttr(wrapper, 'App')
  expect(container.length).toBe(1)
});
