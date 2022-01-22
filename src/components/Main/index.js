import { useState } from "react";
import styled, { css } from "styled-components";
import { isEmpty } from "lodash";
import * as dayjs from "dayjs";

import AllTask from "./sections/AllTask";
import ActiveTask from "./sections/ActiveTask";
import CompletedTask from "./sections/CompletedTask";


const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-column: 4 / 10;
  grid-template-rows: 54px auto;
  grid-row-gap: 18px;
  overflow: hidden;

  background-color: lightskyblue;
`;

const Menu = styled.div( () => {
  // How many menu items do we have?
  const menuItems = 3;

  // Dynamic Variables
  const basicWidth = ( 100 / menuItems ); // makes each item the right size
  const menuItemsLoopOffset = menuItems - 1; // the number of items in the menu

  let menuItemCSSLayout = "";
  for( let i = 1; i <= menuItemsLoopOffset; i++ )
  {
    menuItemCSSLayout += `
    .menu-item:nth-child(${i}).is-active ~ .menu-item:last-child:before {
      left: ${ basicWidth * i - ( basicWidth / 2 ) }%;
    }
    .menu-item:nth-child(${i}):hover ~ .menu-item:last-child:before {
      left: ${ basicWidth * i - ( basicWidth / 2 ) }% !important;
    }
    `
  }

  return css`
    position: relative;
    width: 100%;
    height: 54px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    border-bottom: 1px solid #BDBDBD;

    /* border-bottom: 1px solid black; */
    background-color: lightpink;

    ${ menuItemCSSLayout }
  `;
});

const MenuItem = styled.span`
  place-self: center;

  /* Font Layout */
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: .875rem;
  line-height: 17px;
  color: #333333;
  cursor: pointer;

  &.is-active {
    background-color: lightcoral;
  }

  &:last-child {
    &::before {
      position: absolute;
      content: "";
      width: 89px;
      height: 4px;
      left: 16.65%;
      bottom: 0;
      transition: all 1s ease;
      transform: translateX(-50%);
      background: #2F80ED;
      border-radius: 4px 4px 0px 0px;
    }

    &:hover, &.is-active {
      &::before {
        left: 83.35% !important;
      }
    }
  }
`;

const TaskContainer = styled.div`
  width: 300%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-left: -${({ selectedIdx }) => (selectedIdx) * 100}%;
  transition: margin-left 0.8s ease;
`;


const Main = props => {
  // const DEFAULT_STATES = {
  //   id: "",
  //   doneDate: null,
  //   content: "Select a task...",
  // };
  const FUNC_MAP = ["All", "Active", "Completed"];
  // const {
  //   todoList, doneList,
  //   addTodo, updateTodo, deleteTodo,
  //   addDone,
  // } = props;
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput( event.target.value );
  }

  const handleAddTodo = event => {
    event.preventDefault();

    if( isEmpty( input ) ) return;
    const payload = {
      task: input,
      id: ( +dayjs() ).toString(), // unary operator `+`: convert value to `Number` type, such as `Number( days() )`
      doneDate: null,
    };

    props.addTodo( payload );
    setInput(""); // reset content
  }

  return (
    <Container>
      <Menu>
        {
          FUNC_MAP.map( (funcName, index) => (
            <MenuItem
              key={ index }
              className={ `menu-item ${ selectedIdx === index ? "is-active" : "" }` }
              children={ funcName }
              onClick={ () => setSelectedIdx(index) }
            />
          ))
        }
      </Menu>
      <TaskContainer selectedIdx={ selectedIdx }>
        <AllTask
          contentId={ 0 }
          input={ input }
          selectedIdx={ selectedIdx }
          handleAddTodo={ handleAddTodo }
          handleChange={ handleChange }
          { ...props }
        />
        <ActiveTask
          contentId={ 1 }
          input={ input }
          selectedIdx={ selectedIdx }
          handleAddTodo={ handleAddTodo }
          handleChange={ handleChange }
          { ...props }
        />
        <CompletedTask
          contentId={ 2 }
          input={ input }
          selectedIdx={ selectedIdx }
          { ...props }
        />
      </TaskContainer>
    </Container>
  )
}

export default Main;