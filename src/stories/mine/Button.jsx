import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

import { MODE } from '../constants/common'
import { COLORS } from '../constants/color.config'


export const Button = ({ variant, disableShadow, disabled, backgroundColor, color, startIcon, endIcon, size, label, ...props }) => {
  const mode = !( variant && MODE.find( ele => ele === variant ) ) ? 'default' : variant;
  const colorMode = color && COLORS.find( ele => ele === color);
  const isShadow = disableShadow && 'btn--disable-shadow';
  const isDisabled = disabled && 'btn--disabled';

  return (
    <button
      type="button"
      className={['btn', `btn--${size}`, `btn--${mode}`, isShadow, isDisabled, colorMode && `btn--color-${colorMode}`].join(' ')}
      style={ Object.assign( {}, backgroundColor && { backgroundColor }, !colorMode && { color } ) }
      {...props}
    >
      { startIcon && <span className="material-icons-outlined" style={{ marginRight: 10 }}>{startIcon}</span> }
      { isDisabled ? 'Disabled' : label}
      { endIcon && <span className="material-icons-outlined" style={{ marginLeft: 10 }}>{endIcon}</span> }
    </button>
  );
};

Button.propTypes = {
  /**
   * different modes of component presentation
   */
  variant: PropTypes.oneOf(['default', 'outline', 'text']),
  /**
   * whether to disable box-shadow
   */
  disableShadow: PropTypes.bool,
  /**
   * whether to disable the component
   */
  disabled: PropTypes.bool,
  /**
   * configure the background color
   */
  backgroundColor: PropTypes.string,
  /**
   * to switch the component style by use string params:
   * `default | primary | secondary | danger`
   * or just use that Colorpicker to select the font color
   */
  color: PropTypes.string,
  /**
   * whether to embed a google material icon in front of the component content
   * icon name could be found via: https://fonts.google.com/icons
   */
  startIcon: PropTypes.string,
  /**
   * whether to embed a google material icon behind the component content
   * icon name could be found via: https://fonts.google.com/icons
   */
  endIcon: PropTypes.string,
  /**
   * option to choose size of the component
   */
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'custom']),
  /**
   * the text content within the component
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  variant: 'default',
  disableShadow: false,
  disabled: false,
  backgroundColor: null,
  color: null,
  startIcon: null,
  endIcon: null,
  size: 'md',
  label: 'Default',
  onClick: undefined,
};