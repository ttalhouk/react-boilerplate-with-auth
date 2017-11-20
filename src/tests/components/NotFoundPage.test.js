import React from 'react';
import {shallow} from 'enzyme';

import NotFoundPage from '../../components/NotFoundPage.jsx';

describe('<NotFoundPage />',() => {
  it('should render the not found page correctly', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(wrapper).toMatchSnapshot();
  });

})
