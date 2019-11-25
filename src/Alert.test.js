import React from 'react';
import Alert from './Alert';
import { shallow } from 'enzyme';

test('アラート表示されているか確認', () => {
  /** モック関数を作成 */
  window.alert = jest.fn();
  const wrapper = shallow(<Alert onClick={window.alert('hogehoge')} />);
  /** クリックイベントをシュミレート */
  wrapper.simulate('click');
  /** モック関数が1回呼び出される */
  expect(window.alert.mock.calls.length).toBe(1)
  /** toHaveBeenCalledWithは特定のFunctionが特定の引数で呼び出されたかを検証 */
  expect(window.alert).toHaveBeenCalledWith('hogehoge');
});