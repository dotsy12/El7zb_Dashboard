import React from 'react'
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Members from './pages/MembersShow';
import Settings from './pages/Settings';
import Home from './pages/Home';
import AddMembers from './pages/AddMembers';
import EditMembers from './pages/EditMembers';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
        <Route path="/" exact element={<Home/>}></Route>
        <Route path="/Members" exact element={<Members/>}></Route>
        <Route path="/settings" exact element={<Settings/>}></Route>
        <Route path="/AddMembers" exact element={<AddMembers/>}></Route>
        <Route path="/edit" exact element={<EditMembers/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
