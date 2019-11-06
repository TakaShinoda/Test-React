import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  //<App />内のinnerHTMLに「みやだいもうくん」が含まれているかどうかをテストする
  //”toContain”は含まれているかどうかをチェックする関数
  expect(div.innerHTML).toContain('みやだいもうくん');
  ReactDOM.unmountComponentAtNode(div);
});
