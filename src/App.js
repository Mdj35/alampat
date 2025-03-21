import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Homepage";
import AddEventPage from "./Pages/AddEventPage";
import EventsTable from "./Pages/EventsTable";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-event" element={<AddEventPage />} />
        <Route path="/events" element={<EventsTable />} />
      </Routes>
    </Router>
  );
};

export default App;