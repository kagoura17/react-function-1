import React from "react";
import SceenSize from "./SceenSize"
import ShowPass from "./ShowPass";
import Timer from "./Timer";
import UserList from "./Users/UserList";
const App = () => {
  return <>
  <SceenSize></SceenSize>
  <ShowPass></ShowPass>
  <Timer></Timer>
  <UserList></UserList>
  
  </>;
};

export default App;
