import React from 'react';
import Alert from './Alert';
import { shallow } from 'enzyme';

test('受け取ったpropsの値がアラートで表示されているか確認', () => {
  const wrapper = shallow(<Alert notification={'React'} />);
  
});