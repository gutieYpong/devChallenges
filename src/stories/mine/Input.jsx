import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import './input.css';


const InputContainer = styled.div`
  /* Layout */
  position: relative;
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Label = styled.span`
  /* Font layout */
  font-family: "Noto Sans JP";
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 17px;
  color: ${ ({ isError, isFocus, isHover }) => 
    isFocus && isError ? "#D32F2F" : (
    isFocus ? "#2962FF" : (
    isHover ? "#333333" : (
    isError ? "#D32F2F" : "#333333" )))
  };
`;

const HelperText = styled.span`
  /* Layout */
  position: absolute;
  top: 81px;
  left: 0;

  /* Font layout */
  font-family: "Noto Sans JP";
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 14px;
  color: #828282;
`;

const Icon = styled.span`
  position: absolute;
  width: 18px;
  height: 18px;
  top: 50%;
  ${ ({ pos }) => pos === "start" ? `left: 12px;` : `right: 12px;` }
  color: #828282;
  transform: translateY(-60%);
`;

const InputBarContainer = styled.div`
  /* Layout */
  position: relative;
  width: ${ ({ fullWidth }) => fullWidth ? "100%" : "200px" };
  height: ${ ({ size }) => size === 'sm' ? "40px" : "56px" };
  margin-top: 4px;
`;

const InputBarStyled = styled.input`
  /* Layout */
  position: relative;
  width: 100%;
  height: 100%;
  padding-top: 18px;
  padding-left: ${ ({ padL }) => padL };
  padding-right: ${ ({ padR }) => padR };
  padding-bottom: 18px;
  border: 1px solid ${ ({ isError, isDisabled }) => isError ? "#D32F2F" : ( isDisabled ? "#E0E0E0" : "#828282" ) };
  border-radius: 8px;
  outline: 0;
  pointer-events: ${ ({ isDisabled }) => isDisabled ? "none" : "auto" };;
  background-color: ${ ({ isDisabled }) => isDisabled ? "#F2F2F2" : "#FFFFFF" };

  /* Font layout */
  font-family: "Noto Sans JP";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  color: ${ ({ fontColor }) => fontColor };

  &::placeholder {
    color: #828282;
  }

  &:hover {
    border: 1px solid #333333;
  }

  &:focus {
    border: 1px solid ${ ({ isError }) => isError ? "#D32F2F" : "#2962FF" };
  }
`;


const InputBar = ({ className, isError, isDisabled, startIcon, endIcon, value, color, focusHandler, hoverHandler, ...props }) => {
  const padL = startIcon ? "45px" : "12px";
  const padR = endIcon ? "45px" : "12px";

  return (
    <InputBarStyled
      type="text"
      className={[].join(' ')}
      style={{}}
      value={ value }
      placeholder='Placeholder'
      padL={ padL }
      padR={ padR }
      isError={ isError }
      isDisabled={ isDisabled }
      fontColor={ color }
      onFocus={ () => focusHandler() }
      onBlur={ () => focusHandler() }
      onMouseEnter={ () => hoverHandler() }
      onMouseLeave={ () => hoverHandler() }
      {...props}
    />
  );
};

const TextareaStyled = styled.textarea`
  /* Layout */
  width: 100%;
  padding-top: 18px;
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 18px;
  border: 1px solid ${ ({ isError }) => isError ? "#D32F2F" : "#828282" };
  border-radius: 8px;
  outline: 0;
  resize: none;

  /* Font layout */
  font-family: "Noto Sans JP";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
`;

const Textarea = ({ className, rows, isError, isDisabled, value, focusHandler, ...props }) => {
  return (
    <TextareaStyled
      rows={ rows }
      value={ value }
      placeholder='Placeholder'
      {...props}
    />
  )
}

export const Input = ({ className, error, disabled, helperText, startIcon, endIcon, value, size, fullWidth, multiline, rows, color, ...props }) => {
  const [isFocus, setIsFocus] = useState( false );
  const [isHover, setIsHover] = useState( false );

  const focusHandler = () => {
    setIsFocus( !isFocus );
  }

  const hoverHandler = () => {
    setIsHover( !isHover );
  }

  if( multiline )
  {
    return (
      <InputContainer>
        <Label children="Label" isError={ error } isFocus={ isFocus } />
        <InputBarContainer size={ size } fullWidth={ fullWidth } >
          <Textarea 
            rows={ rows }
            value={ value }
            {...props}
          />
        </InputBarContainer>
        { helperText && <span className='input-helper-text'>{ helperText }</span> }
      </InputContainer>
    );
  }
  else
  {
    return (
      <InputContainer>
        <Label children="Label" isError={ error } isFocus={ isFocus } isHover={ isHover } />
        <InputBarContainer size={ size } fullWidth={ fullWidth } >
          <InputBar
            className={ className }
            value={ value }
            isError={ error }
            isDisabled={ disabled }
            startIcon={ startIcon }
            endIcon={ endIcon }
            color={ color }
            focusHandler={ focusHandler }
            hoverHandler={ hoverHandler }
            {...props}
          />
          { startIcon && <Icon className="material-icons" children={ startIcon } pos="start" /> }
          { endIcon && <Icon className="material-icons" children={ endIcon } pos="end" /> }
        </InputBarContainer>
        { helperText && <HelperText children={ helperText } /> }
      </InputContainer>
    );
  }
};

Input.propTypes = {
  /**
   * shows up when error occurs
   */
  error: PropTypes.bool,
  /**
   * whether to disable the component
   */
  disabled: PropTypes.bool,
  /**
   * short text to show some help
   */
  helperText: PropTypes.string,
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
  size: PropTypes.oneOf(['sm', 'md']),
  /**
   * the text content within the component
   */
  value: PropTypes.string,
  /**
   * choose to have input take the width of the parent
   */
  fullWidth: PropTypes.bool,
  /**
   * choose between `input` or `textarea` element
   */
  multiline: PropTypes.bool,
  /**
   * number of rows of textarea
   */
  rows: PropTypes.number,
  /**
   * use Colorpicker or input string to select the font color
   */
  color: PropTypes.string,
  /**
   * onChange handler
   */
  onChange: PropTypes.func,
};

Input.defaultProps = {
  error: false,
  disabled: false,
  helperText: null,
  startIcon: null,
  endIcon: null,
  size: 'md',
  value: undefined,
  fullWidth: false,
  multiline: false,
  rows: 4,
  color: null,
  onChange: undefined,
};
