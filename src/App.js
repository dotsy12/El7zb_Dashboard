import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Members from "./pages/Members/AddMembers/MembersShow";
import Settings from "./pages/Settengs/Settings";
import Home from "./pages/Home/Home";
import AddMembers from "./pages/Members/AddMembers/Components/AddMembers";
import EditMembers from "./pages/Members/AddMembers/EditMembers";
import MemberPerformance from "./pages/Members/MemberPerformance/MembersShow";
import MemberPerformanceData from "./pages/Members/MemberPerformance/Components/MembersData";
import AddRules from "./pages/Members/MemberRole/Components/AddRules";
import ViewRules from "./pages/Members/MemberRole/ViewRules";
import ViewRole from "./pages/Members/RoleInTheParty/MembersShow";
import AddRole from "./pages/Members/RoleInTheParty/Components/MembersData";
import ViewTool from "./pages/Members/OversightTools/MembersShow";
import AddTool from "./pages/Members/OversightTools/Components/MembersData";
import AddRenewal from "./pages/Members/MemberRenewal/Components/MembersData";
import ViewRenewal from "./pages/Members/MemberRenewal/MembersShow";
import AddCancel from "./pages/Members/MemberCancel/Components/MembersData";
import ViewCancel from "./pages/Members/MemberCancel/MembersShow";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/Members" exact element={<Members />}></Route>
          <Route path="/AddMembers" exact element={<AddMembers />}></Route>
          <Route path="/AddRenewal" exact element={<AddRenewal />}></Route>
          <Route path="/ViewRenewal" exact element={<ViewRenewal />}></Route>
          <Route path="/AddCancel" exact element={<AddCancel />}></Route>
          <Route path="/ViewCancel" exact element={<ViewCancel />}></Route>
          <Route path="/settings" exact element={<Settings />}></Route>
          <Route path="/MemberPerformanceData" exactelement={<MemberPerformanceData />}></Route>
          <Route path="/MemberPerformance" exact element={<MemberPerformance />}></Route>
          <Route path="/AddRules" exact element={<AddRules />}></Route>
          <Route path="/ViewRules" exact element={<ViewRules />}></Route>
          <Route path="/AddRole" exact element={<AddRole />}></Route>
          <Route path="/ViewRole" exact element={<ViewRole />}></Route>
          <Route path="/AddTool" exact element={<AddTool />}></Route>
          <Route path="/ViewTool" exact element={<ViewTool />}></Route>
          <Route path="/edit" exact element={<EditMembers />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
