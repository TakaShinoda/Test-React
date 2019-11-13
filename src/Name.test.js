import React from 'react';
import Name from './Name';
import { shallow } from 'enzyme';

test('setStateで<Form>のnameが変更されるかを確かめる', () => {
    const wrapper = shallow(<Name />);
    /** <Form />のstate.nameが’’ではない。(初期stateは{name: ‘hoge’}) */
    expect(wrapper.state().name).not.toEqual('')
    /** setStateでnameをみやだいもうくんに更新 */
    wrapper.setState({ name: 'みやだいもうくん'});
    /** state.nameがみやだいもうくんならOK */
    expect(wrapper.state().name).toEqual('みやだいもうくん')
});