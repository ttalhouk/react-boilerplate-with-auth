import React from 'react';
import {shallow} from 'enzyme';

import LoadingPage from '../../components/LoadingPage.jsx';

describe('<LoadingPage />',() => {
  it('should render the loading page correctly', () => {
    const wrapper = shallow(<LoadingPage />);
    expect(wrapper).toMatchSnapshot();
  });

})
