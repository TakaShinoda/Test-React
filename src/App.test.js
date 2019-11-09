import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Count from './Count';
import { shallow, mount, render } from 'enzyme';



it('innerHTMLに含まれているの確認', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  //<App />内のinnerHTMLに「みやだいもうくん」が含まれているかどうかをテストする
  //”toContain”は含まれているかどうかをチェックする関数
  expect(div.innerHTML).toContain('みやだいもうくん');
  ReactDOM.unmountComponentAtNode(div);
});

test('子コンポーネントが存在するか確認', () => {
  // == 準備 ==
  /** Appコンポーネントをshallowレンダリング */
  const wrapper = shallow(<App />);

  // == 検証 ==
  /** 各コンポーネントの数を取得し、1であればOK */
  expect(wrapper.find(Count).length).toBe(1);
});