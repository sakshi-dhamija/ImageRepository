import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./Landing";
import About from "./About";
import Developer from "./Developer";
import NavBar from "./NavBar";
import Mentor from "./Mentor";
import ImageUpload from "./ImageUpload";
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

import 'react-pro-sidebar/dist/css/styles.css';


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/home">
            <NavBar />
            <Landing />
            <About />
            <Developer />
            <Mentor />
          </Route>
          <Route path="/imagerepo">
          <div style={{ 
              backgroundImage: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fin.pinterest.com%2Fpin%2F677439968930881544%2F&psig=AOvVaw1J3dgM7pHR4i5AFYNrQe_d&ust=1612198467333000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCIj3zLrRxu4CFQAAAAAdAAAAABAD",
            }}>
              
            <ProSidebar>
            <Menu iconShape="square">
            <MenuItem >Search Img</MenuItem>
            <MenuItem >Upload Img</MenuItem>
            <ImageUpload username="manuik" />
            <MenuItem >Perform OCR</MenuItem>
            
            <SubMenu title="Image Categories" >
            <MenuItem>Category 1</MenuItem>
            <MenuItem>Category 2</MenuItem>
            </SubMenu>
            </Menu>
            </ProSidebar>;
            
            
            Hello!
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
