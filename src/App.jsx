import { useMemo, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import {
  TbChess,
  TbChessRook,
  TbChessBishop,
  TbChessKing,
  TbChessQueen,
  TbChessKnight,
} from "react-icons/tb";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const chessCols = ["a", "b", "c", "d", "e", "f", "g", "h"];
  const initialRenderIcon = (row, col) => {
    if (row === 1 || row === 6) {
      return <TbChess fill="white" />;
    }
    if (row === 0 || row === 7) {
      switch (col) {
        case 0:
          return <TbChessRook fill="white" />;
        case 7:
          return <TbChessRook fill="white" />;
        case 1:
          return <TbChessKnight fill="white" />;
        case 6:
          return <TbChessKnight fill="white" />;
        case 2:
          return <TbChessBishop fill="white" />;

        case 5:
          return <TbChessBishop fill="white" />;
        case 4:
          return <TbChessKing fill="white" />;
        case 3:
          return <TbChessQueen fill="white" />;
      }
    }
  };
  const board = [...Array(8)].map((arr, index) => {
    return [...Array(8)].map((ar, ind) => {
      return chessCols[index] + ind;
    });
  });
  const chessBoard = useMemo(() => {
    return board.map((ar1, ind) => {
      return ar1.map((ar2, index) => {
        if ((ind + 2) % 2 === 0) {
          if ((index + 2) % 2 === 0) {
            return (
              <div id={ar2} className="bg-white h-10 w-10">
                {initialRenderIcon(ind, index)}
              </div>
            );
          } else {
            return (
              <div id={ar2} className="bg-black h-10 w-10">
                {initialRenderIcon(ind, index)}
              </div>
            );
          }
        } else {
          if ((index + 2) % 2 === 0) {
            return (
              <div id={ar2} className="bg-black  h-10 w-10">
                {initialRenderIcon(ind, index)}
              </div>
            );
          } else {
            return (
              <div id={ar2} className="bg-white h-10 w-10">
                {initialRenderIcon(ind, index)}
              </div>
            );
          }
        }
      });
    });
  }, []);
  const chess = useMemo(() => {
    return;
  }, []);
  return (
    <div className="App">
      <div
        className="grid grid-cols-8 grid-rows-8 bg-slate-300 border
       border-gray-950"
      >
        {chessBoard}
      </div>
    </div>
  );
}

export default App;
