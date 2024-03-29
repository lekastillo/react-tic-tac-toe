import React from 'react';
import styled from 'styled-components';

const StyledButtom = styled.button`
  margin: 10px;
  background: #fff;
  border: 1px solid #999;
  float: left;
  font-size: 18px;
  font-weight: bold;
  line-height: 50px;
  height: 50px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
  width: 50px;
  &.square-x {
    background: #2acf;
    color: white;
  }
  &.square-o {
    background: #c77;
    color: white;
  }
  &.square-e {
    background: white;
    color: black;
  }
  
`;

const Square = (props) => {

  const { cell, setMoveOption} = props;
  let squareClass= cell[2]==='X' ? 'x' : cell[2]==='O' ? 'o' : 'e';
  return (
		<StyledButtom className={'square-'+squareClass} onClick={ ()=> setMoveOption(cell[0],cell[1]) } > {cell[2]} </StyledButtom>
  );
} 

export default Square;