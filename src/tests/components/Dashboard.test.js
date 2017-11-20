import React from 'react';
import {shallow} from 'enzyme';

import DashboardPage from '../../components/DashboardPage.jsx';

describe('<DashboardPage />',() => {
  it('should render the dashboard page correctly', () => {
    const wrapper = shallow(<DashboardPage />);
    expect(wrapper).toMatchSnapshot();
  });

})
