import React from 'react';
import {shallow} from 'enzyme';

import {LoginPage} from '../../components/LoginPage.jsx';

describe('<LoginPage />', () => {

  it('should render LoginPage correctly', () => {
    const wrapper = shallow(<LoginPage startLogin={() => {}}/>);
    expect(wrapper).toMatchSnapshot();
  });
  it('should call startLogin on button click', () => {
    const startLogin = jest.fn();
    const wrapper = shallow(<LoginPage startLogin={startLogin}/>);
    wrapper.find('button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
  });
})
