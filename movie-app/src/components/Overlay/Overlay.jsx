import React from 'react';
import PropTypes from 'prop-types';
import style from './Overlay.module.scss';

function Overlay({ handleClick }) {
  return <div role="presentation" className={style.overlay} onClick={handleClick} />;
}

Overlay.defaultProps = {
  handleClick: () => {},
};

Overlay.propTypes = {
  handleClick: PropTypes.func,
};

export default Overlay;
