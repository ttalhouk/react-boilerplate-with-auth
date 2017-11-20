import React from 'react';
import {shallow} from 'enzyme';
import {Header} from '../../components/Header.jsx';

describe('<Header />', () => {

  it('should render Header correctly', () => {
    const wrapper = shallow(<Header startLogout={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should call startLogout when button is clicked', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout} />);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
  })

})
