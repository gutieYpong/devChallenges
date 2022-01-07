import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import './input.css';


// const Label = styled.span`
//   /* Layout */
//   /* padding-left: 2px; */

//   /* Font layout */
//   font-family: "Mulish";
//   font-style: normal;
//   font-weight: 800;
//   font-size: 9px;
//   line-height: 11px;
//   text-transform: uppercase;
//   color: #333333;
// `;

// const InputContainer = styled.div( ({ IsPopUp }) => {
//   const borderLayout = IsPopUp ? 
//     `
//       border: 1px solid #333333;
//       box-sizing: border-box;
//       filter: drop-shadow(0px 1px 6px rgba(0, 0, 0, 0.1));
//       border-radius: 16px;
//     ` 
//       :
//     `
//       border-top: 0;
//       border-left: 1px solid #F2F2F2;
//       border-right: 1px solid #F2F2F2;
//       border-bottom: 0;
//     `;

//   return css`
//     /* Layout */
//     flex-basis: 35.69%;
//     width: 100%;
//     height: 100%;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;

//     /* Border layout */
//     ${ borderLayout }

//     padding: ${ ({ IsPopUp }) => IsPopUp ? "12px 12px 10px 11px" : "0px" };
//     transition: all .5s ease;

//     /* background-color: grey; */
//   `
// });

// const InputStyled = styled.input`
//   /* Layout */
//   width: 100%;
//   height: ${ ({ IsPopUp }) => IsPopUp ? "auto" : "100%" };

//   border: 0;
//   outline: 0;
//   padding: ${ ({ IsPopUp }) => IsPopUp ? "0px" : "18px 16px" };

//   &::placeholder {
//     color: "#BDBDBD";
//   }
// `;

// const Input = props => {
//   const [filteredSuggestions, setFilteredSuggestions] = useState([]);
//   const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
//   const [showSuggestions, setShowSuggestions] = useState(false);
//   const [input, setInput] = useState("");

//   const onChange = (e) => {
//     const userInput = e.target.value;

//     // ? Filter our suggestions that don't contain the user's input
//     // ! Get the suggestions that contain the user's input
//     const unLinked = LOCATIONS.filter(( location ) =>
//       location.toLowerCase().indexOf(userInput.toLowerCase()) > -1
//     );

//     setInput(e.target.value);
//     setFilteredSuggestions(unLinked);
//     setActiveSuggestionIndex(0);
//     setShowSuggestions(true);
//   };

//   const onClick = (e) => {
//     setFilteredSuggestions([]);
//     setInput(e.target.innerText);
//     setActiveSuggestionIndex(0);
//     setShowSuggestions(false);
//   };

//   const onKeyDown = (e) => {
//     // User pressed the enter key
//     if (e.keyCode === 13) {
//       setInput(filteredSuggestions[activeSuggestionIndex]);
//       setActiveSuggestionIndex(0);
//       setShowSuggestions(false);
//     }
//     // User pressed the up arrow
//     else if (e.keyCode === 38) {
//       if (activeSuggestionIndex === 0) {
//         return;
//       }

//       setActiveSuggestionIndex(activeSuggestionIndex - 1);
//     }
//     // User pressed the down arrow
//     else if (e.keyCode === 40) {
//       if (activeSuggestionIndex - 1 === filteredSuggestions.length) {
//         return;
//       }

//       setActiveSuggestionIndex(activeSuggestionIndex + 1);
//     }
//   };

//   const SuggestionsListComponent = () => {
//     return filteredSuggestions.length ? (
//       <ul className="suggestions">
//         {filteredSuggestions.map((suggestion, index) => {
//           let className;

//           // Flag the active suggestion with a class
//           if (index === activeSuggestionIndex) {
//             className = "suggestion-active";
//           }

//           return (
//             <li className={className} key={suggestion} onClick={onClick}>
//               {suggestion}
//             </li>
//           );
//         })}
//       </ul>
//     ) : (
//       <div className="no-suggestions">
//         <span role="img" aria-label="tear emoji">
//           😪
//         </span>{" "}
//         <em>sorry no suggestions</em>
//       </div>
//     );
//   };

//   return (
//     <InputContainer
//       IsPopUp={ props.isPopUp }
//       onClick={ () => props.setPopUp() }
//     >
//       { props.isPopUp && <Label children="GUESTS" /> }
//       <InputStyled 
//         type="text"
//         onChange={onChange}
//         onKeyDown={onKeyDown}
//         value={input}
//         placeholder="Add guests"
//         IsPopUp={ props.isPopUp }
//       />
//       {showSuggestions && input && <SuggestionsListComponent />}
//     </InputContainer>
//   )
// }

Input.propTypes = {
  /**
   * different modes of component presentation
   */
  // variant: PropTypes.oneOf(['default', 'outline', 'text']),
  /**
   * whether to disable box-shadow
   */
  // disableShadow: PropTypes.bool,
  /**
   * whether to disable the component
   */
  // disabled: PropTypes.bool,
  /**
   * configure the background color
   */
  // backgroundColor: PropTypes.string,
  /**
   * to switch the component style by use string params:
   * `default | primary | secondary | danger`
   * or just use that Colorpicker to select the font color
   */
  // color: PropTypes.string,
  /**
   * whether to embed a google material icon in front of the component content
   * icon name could be found via: https://fonts.google.com/icons
   */
  // startIcon: PropTypes.string,
  /**
   * whether to embed a google material icon behind the component content
   * icon name could be found via: https://fonts.google.com/icons
   */
  // endIcon: PropTypes.string,
  /**
   * option to choose size of the component
   */
  // size: PropTypes.oneOf(['sm', 'md', 'lg']),
  /**
   * the text content within the component
   */
  // label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  // onClick: PropTypes.func,
};

Input.defaultProps = {
  // variant: 'default',
  // disableShadow: false,
  // disabled: false,
  // backgroundColor: null,
  // color: null,
  // startIcon: null,
  // endIcon: null,
  // size: 'md',
  // label: 'Default',
  // onClick: undefined,
};
