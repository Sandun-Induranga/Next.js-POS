import React from "react";
import Card from "./Card";

const DashboardContainer = () => {
  return (
    <div className="md:p-10 p-2">
      <section className="flex flex-wrap gap-4 justify-between">
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </div>
  );
};

export default DashboardContainer;
