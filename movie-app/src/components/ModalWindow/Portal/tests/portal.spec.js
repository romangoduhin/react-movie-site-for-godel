import React from 'react';
import ReactDOM from 'react-dom';
import Portal from '../index';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, mount, render } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });
const setUp = () => shallow(
  <Portal>
    <div>test window</div>
  </Portal>,
);

describe('Portal component', () => {
  let component;

  beforeEach(() => {
    jest.spyOn(document.body, 'appendChild').mockImplementation(() => {
    });
    jest.spyOn(document.body, 'removeChild').mockImplementation(() => {
    });
    component = setUp();
  });

  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element, node) => element);
  });

  it('should render Portal component', () => {
    expect(component).toMatchSnapshot();
  });

  it('should call appendChild when component mounted', () => {
    expect(document.body.appendChild).toHaveBeenCalledTimes(1);
  });

  it('should call removeChild when component unmounted', () => {
    component.unmount();
    expect(document.body.removeChild).toHaveBeenCalledTimes(1);
  });
});
