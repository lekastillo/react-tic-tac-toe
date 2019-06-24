import React from 'react';
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

  const { board, setMoveOption} = props;

  return (
		<BoardStyled>
      {
        board.map((board_row) =>
          <BoardRowStyled key={board_row.toString()}>
            {
              board_row.map((board_cell) =>
                <Square key={board_cell.toString() } cell={board_cell} setMoveOption={setMoveOption}/>
              )
            }
          </BoardRowStyled>
        )
      }
    </BoardStyled>
  );
} 

export default Board;