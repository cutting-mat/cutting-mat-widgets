import { mount } from '@vue/test-utils';
import DemoButton from '../../base-button';

test('render demo button', () => {
  const wrapper = mount(DemoButton);
  expect(wrapper).toMatchSnapshot();
});
