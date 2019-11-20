import React from 'react';
import Message from "./Message";
import { shallow } from 'enzyme';

test('受け取ったpropsの値を表示できているか確認', () => {
    /*'佐賀へ'という値をtextに渡して、Messageコンポーネントをshallowレンダリング*/
    const wrapper = shallow(<Message message={'佐賀へ'} />);
    /** レンダリングされたテキストが'ようこそ! 佐賀へ'であればOK */
    expect(wrapper.text()).toBe('ようこそ! 佐賀へ');
    /** props.textの値を'World'に変更 */
    wrapper.setProps({ message: 'World' });
    /** レンダリングされたテキストが'ようこそ! World'であればOK */
    expect(wrapper.text()).toBe('ようこそ! World');
});