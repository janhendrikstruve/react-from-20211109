import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Stuff from './Stuff/Stuff';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <p>moin-tschüss-app</p>
      <Link to="/">moin</Link>
      <br />
      <Link to="/bye">tschüss</Link>
      <Routes>
        <Route path="/" element={<p>hello</p>} />
        <Route path="/bye" element={<p>bye</p>} />
        <Route path="/Stuff">
          <Route path=":stuff" element={<Stuff />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
