import React, { useState } from "react";
import Dashboard from "./page/Dashboard";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./component/dashboard/Navbar";
import DashboardStats from "./component/dashboard/dashboardStats/DashboardStats";
import "./App.css";

const App = () => {
  const [toggleSidebar, setToggleSodebar] = useState(false);

  return (
    <Router>
      {/* Header  */}
      <Navbar
        toggleSidebar={toggleSidebar}
        setToggleSodebar={setToggleSodebar}
      />

      {/* Pages  */}
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              toggleSidebar={toggleSidebar}
              setToggleSodebar={setToggleSodebar}
            />
          }
        >
          <Route index element={<DashboardStats />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
