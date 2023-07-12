import React from "react";
import "./App.css";
import "./responsive.css";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import SingleCourse from "./screens/SingleCourse";
import NotFound from "./screens/NotFound";
import AddEdit from "./screens/AddEdit";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from "./screens/Login";

const App = () => {
  return (
    <Router>
      <div className="App">
        <ToastContainer position="top-center" />
        <Switch>

          <Route path="/" component={HomeScreen} exact />
          <Route path="/products/:id" component={SingleCourse} />
          <Route path="/admin" component={AddEdit} />
          <Route path="/add" component={AddEdit} />
          <Route path="/login" component={Login} />
          <Route path="/update/:id" component={AddEdit} />
          <Route path="*" component={NotFound} />

        </Switch>
      </div>

    </Router>
  );
};

export default App;
