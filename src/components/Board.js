import React, { Component } from 'react';
import styled from 'styled-components';
import Square from './Square'

const BoardStyled = styled.div`
  margin-top: 20px;
  position: relative;
  border: 15px solid #cda;
  -webkit-box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.75);
  z-index: 10;
  padding-top: 10px;
`;

const BoardRowStyled = styled.div`
  &:after {
    clear: both;
    content: "";
    display: table;
  }
`;

const Board = (props) => {

  const { board, current_letter, board_size} = props;
  return (
		<BoardStyled>
      {/* {
        board_size.map((board_index) =>
          <BoardRowStyled>
            {
              board_size.map((cell_index) =>
                <Square cell={board[]}/>
              )
            }
          </BoardRowStyled>
        )
      }
      <BoardRowStyled>
        
        <Square cell={[1,2,'O']}/>
        <Square cell={[1,3,'']}/>
      </BoardRowStyled> */}
      <BoardRowStyled>
        <Square cell={[2,1,'']}/>
        <Square cell={[2,2,'X']}/>
        <Square cell={[2,3,'O']}/>
      </BoardRowStyled>
    </BoardStyled>
  );
} 

export default Board;