import React from "react";
import LineChart from "../../components/charts/LineChart";
import Header from "../../components/Header";

const Line = () => {
  return (
    <div className="m-4 md:md-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="Chart" title="Inflation" />
      <div className="w-full">
        <LineChart />
      </div>
    </div>
  );
};

export default Line;
