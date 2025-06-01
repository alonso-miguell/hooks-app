import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {HooksApp} from "./HooksApp";
import {CounterApp} from "./01-useState/CounterApp";
import {CounterWithCustomHook} from "./01-useState/CounterWithCustomHook";
import {SimpleForm} from "./02-useEffect/SimpleForm";
import {FormWithCustomHook} from "./02-useEffect/FormWithCustomHook";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode> to avoid extra unneeded rendering
    <FormWithCustomHook />
  // </React.StrictMode>
);