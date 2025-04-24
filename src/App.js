import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Homepage";
import AddEventPage from "./Pages/AddEventPage";
import EventsTable from "./Pages/EventsTable";
import AddTribes from "./Pages/AddTribes";
import TribePage from "./Pages/TribePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-event" element={<AddEventPage />} />
        <Route path="/events" element={<EventsTable />} />
        <Route path="/add-tribes" element={<AddTribes />} />
        <Route path="/tribes" element={<TribePage />} />
      </Routes>
    </Router>
  );
};

export default App;