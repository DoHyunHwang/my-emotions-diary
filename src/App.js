import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import New from "./pages/New";
import Diary from "./pages/Diary";
import React, { useReducer, useRef } from "react";
// import ReactPlayer from "react-player";

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      newState = [{ ...action.data }, ...state];
      break;
    }
    case "REMOVE": {
      newState = state.filter((it) => it.id !== action.tartgetId);
      break;
    }
    case "EDIT": {
      newState = state.map((it) =>
        it.id === action.data.id ? { ...action.data } : it
      );
      break;
    }
    default:
      return state;
  }
  return newState;
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const dummyData = [
  {
    id: 1,
    date: 1660455977852,
    content: "오늘의 일기 1번",
    emotion: 1,
  },
  {
    id: 2,
    date: 1660455977853,
    content: "오늘의 일기 2번",
    emotion: 2,
  },
  {
    id: 3,
    date: 1660455977854,
    content: "오늘의 일기 3번",
    emotion: 3,
  },
  {
    id: 4,
    date: 1660455977855,
    content: "오늘의 일기 4번",
    emotion: 4,
  },
  {
    id: 5,
    date: 1660455977856,
    content: "오늘의 일기 5번",
    emotion: 5,
  },
];

function App() {
  const [data, dispatch] = useReducer(reducer, dummyData);

  const dataId = useRef(0);

  const onCreate = (date, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
    dataId.current += 1;
  };

  const onRemove = (tartgetId) => {
    dispatch({ type: "REMOVE", tartgetId });
  };

  const onEdit = (tartgetId, date, content, emotion) => {
    dispatch({
      type: "EDIT",
      data: [
        {
          id: tartgetId,
          date: new Date(date).getTime(),
          content,
          emotion,
        },
      ],
    });
  };

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{ onCreate, onRemove, onEdit }}>
        <BrowserRouter>
          {/* <ReactPlayer
            className="react-player"
            url={"https://youtu.be/KhQDNJYdtIo"}
            width={400}
            playing
            controls
          /> */}
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/edit" element={<Edit />}></Route>
              <Route path="/new" element={<New />}></Route>
              <Route path="/diary/:id" element={<Diary />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
