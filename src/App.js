import React from 'react';
import Counter from './Components/CounterComponent/Counter';
import UserDataForm from './Components/FormComponent/FormComponent';
import RichTextEditor from './Components/RichTextComponent/RichText';
import HomeComponent from './Components/HomeComponent/Home';
import { Link,Routes, Route } from 'react-router-dom';

import './App.css'
const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/user-data">User Data</Link>
          </li>
          <li>
            <Link to="/rich-text-editor">Rich Text Editor</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/counter" element={<Counter />} />
        <Route path="/user-data" element={<UserDataForm />} />
        <Route path="/rich-text-editor" element={<RichTextEditor />} />
        <Route path="/" element={<HomeComponent />} />
      </Routes>
    </div>
  );
};


export default App;
