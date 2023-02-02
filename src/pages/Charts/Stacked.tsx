import React from "react";
import ChartsHeader from "../../components/ChartHeader";
import StackedChart from '../../components/charts/StackedChart';

const Stacked = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Stacked" title="Revenue Breakdown" />
      <div className="w-full">
        <StackedChart width='' height='' />
      </div>
    </div>
  );
};

export default Stacked;
