import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from "./redux/store";
import { Provider } from "react-redux";
import {fetchUsers} from "./redux/features/usersSlice";
import { fetchPosts } from "./redux/features/postsSlice";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

store.dispatch(fetchUsers())
store.dispatch(fetchPosts())

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
            <Route path="/*" element = {<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
);
