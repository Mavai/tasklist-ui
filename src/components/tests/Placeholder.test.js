import React from 'react';
import { shallow } from 'enzyme';
import Placeholder from '../Placeholder';

describe.only('<Placeholder />', () => {
  it('renders content', () => {

    const noteComponent = shallow(<Placeholder />);
    const contentDiv = noteComponent.find('.content');
    console.log(contentDiv.debug())

    expect(contentDiv.text()).toContain('Select project');
  });
});