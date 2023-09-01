import React, { useState } from "react";
import ListingsCard from "./ListingsCard";
import ListingsTable from "./ListingsTable";

const LandingPage = () => {
  const [view, setView] = useState("table");

  return (
    <div className="p-5">
      <h1>Property Listings</h1>
      <div className="view-options" style={{ marginBottom: "20px" }}>
        <button className="btn btn-primary" onClick={() => setView("table")}>
          Table View
        </button>
        <button
          className="btn btn-primary ms-2"
          onClick={() => setView("card")}
        >
          Card View
        </button>
      </div>
      {view === "table" ? <ListingsTable /> : <ListingsCard />}
    </div>
  );
};

export default LandingPage;
