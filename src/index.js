import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {HooksApp} from "./HooksApp";
import {CounterApp} from "./01-useState/CounterApp";
import {CounterWithCustomHook} from "./01-useState/CounterWithCustomHook";
import {SimpleForm} from "./02-useEffect/SimpleForm";
import {FormWithCustomHook} from "./02-useEffect/FormWithCustomHook";
import {MultipleCustomHooks} from "./03-examples/MultipleCustomHooks";
import {FocusScreen} from "./04-useRef/FocusScreen";
import {Layout} from "./05-useLayoutEffect/Layout";
import {Memorize} from "./06-memos/Memorize";
import {MemoHook} from "./06-memos/MemoHook";
import {CallbackHook} from "./06-memos/CallbackHook";
import {Parent} from "./07-tarea-memo/Parent";
// import "./08-useReducer/intro-reducer"
import {TaskApp} from "./08-useReducer/TaskApp";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> to avoid extra unneeded rendering
    <TaskApp />
  // </React.StrictMode>
);