import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Count from './Count';
import Form from './Name';
import Message from './Message';
import Alert from './Alert';
import { shallow, mount, render } from 'enzyme';



test('innerHTMLに含まれているか確認', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  //<App />内のinnerHTMLに「みやだいもうくん」が含まれているかどうかをテストする
  //”toContain”は含まれているかどうかをチェックする関数
  expect(div.innerHTML).toContain('みやだいもうくん');
  ReactDOM.unmountComponentAtNode(div);
});

test('子コンポーネントが存在するか確認', () => {
  /** Appコンポーネントをshallowレンダリング */
  const wrapper = shallow(<App />);
  /** 各コンポーネントの数を取得し、1であればOK */
  expect(wrapper.find(Count).length).toBe(1);
  expect(wrapper.find(Form).length).toBe(1);
  expect(wrapper.find(Message).length).toBe(1);
  expect(wrapper.find(Alert).length).toBe(1);
  
});
