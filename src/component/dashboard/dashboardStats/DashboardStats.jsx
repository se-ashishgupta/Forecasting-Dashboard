import React, { useState } from "react";
import TopNavbar from "./TopNavbar";
import Card from "./Card";
import Graph from "./Graph";

const DashboardStats = () => {
  const filterOption = [
    {
      value: "6M",
    },
    {
      value: "1Y",
    },
    {
      value: "3Y",
    },
    {
      value: "5Y",
    },
  ];
  const condtionOption = [
    {
      value: "Current",
    },
    {
      value: "Forecasting",
    },
  ];

  const [filterValue, setFilterValue] = useState(filterOption[1].value);
  const [condtionValue, setCondtionValue] = useState(condtionOption[0].value);

  const [tax, setTax] = useState(50);
  const [spendIndex, setSpendIndex] = useState(50);
  const [growthRate, setGrowthRate] = useState(50);

  console.log(tax);
  return (
    <>
      {/* Topbar  */}
      <TopNavbar />

      {/* Stats  */}
      <div className="p-4 space-y-8 py-8">
        {/* Current  */}
        <div className=" space-y-4">
          <h1 className="font-bold text-xl text-blue-900">Current</h1>

          <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-10">
            <Card title={"1.4cr"} subTitle={"Total Transaction"} />
            <Card title={"38,000"} subTitle={"Avg Transaction, Per Day"} />
            <Card title={"5%"} subTitle={"Growth rate in Past 12 Months"} />
          </div>
        </div>

        {/* Porjected  */}
        <div className=" space-y-4">
          <div>
            <h1 className=" font-bold text-xl text-blue-900">Porjected</h1>
          </div>
          <div className=" w-full grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-10">
            <Card
              title={"5.4cr"}
              subTitle={"Total Transaction, 3Y Projected"}
            />
            <Card title={"12cr"} subTitle={"Total Transaction, 5Y Projected"} />
          </div>
        </div>

        {/* Graph  */}
        <div className="space-y-4 w-full ">
          <div className=" flex items-center justify-between flex-wrap gap-2 ">
            <h1 className=" font-bold text-xl text-blue-900">Graph</h1>
            <div className=" flex items-center gap-4 flex-wrap">
              {/* Filter Option  */}
              <div className=" flex gap-2">
                {filterOption.map((item, index) => (
                  <span
                    key={index}
                    className={`cursor-pointer shadow px-2 py-1 rounded-md ${
                      filterValue === item.value
                        ? "bg-blue-900 text-white"
                        : " bg-white text-blue-900"
                    }   font-bold`}
                    onClick={() => setFilterValue(item.value)}
                  >
                    {item.value}
                  </span>
                ))}
              </div>

              {/* Condition Option  */}
              <div className=" space-x-2">
                {condtionOption.map((item, index) => (
                  <button
                    key={index}
                    className={`cursor-pointer shadow px-2 py-1 rounded-md ${
                      condtionValue === item.value
                        ? "bg-blue-900 text-white"
                        : " bg-white text-blue-900"
                    }   font-bold`}
                    onClick={() => setCondtionValue(item.value)}
                  >
                    {item.value}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full overflow-x-hidden bg-white p-2">
            <Graph />
          </div>
        </div>

        {/* Slider Pickerdiv  */}
        <div className=" space-y-4">
          <div className=" flex items-center justify-between flex-wrap">
            <h1 className=" font-bold text-xl text-blue-900">Parameters</h1>
            <p className="md:text-lg text-gray-600">
              Tweak the parameters to get forecast
            </p>
          </div>

          <div className=" w-full grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-10">
            <div className=" flex flex-col space-y-1">
              <div className=" flex items-center justify-between w-full text-blue-900 font-semibold">
                <span>0</span>
                <span>100</span>
              </div>
              <input
                id="default-range"
                type="range"
                min="0"
                max="100"
                value={tax}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-[#1e3a8a]"
                onChange={(e) => setTax(e.target.value)}
              />
              <label
                htmlFor="default-range"
                className="block mb-2 text-sm font-medium text-blue-900 text-center"
              >
                Number of Taxable Businesses:{" "}
                <span className=" text-lg font-semibold">{tax}</span>
              </label>
            </div>
            <div className=" flex flex-col space-y-1">
              <div className=" flex items-center justify-between w-full text-blue-900 font-semibold">
                <span>0</span>
                <span>100</span>
              </div>
              <input
                id="default-range"
                type="range"
                min="0"
                max="100"
                value={spendIndex}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-[#1e3a8a]"
                onChange={(e) => setSpendIndex(e.target.value)}
              />
              <label
                htmlFor="default-range"
                className="block mb-2 text-sm font-medium text-blue-900 text-center"
              >
                Consumer Spending Index{" "}
                <span className=" text-lg font-semibold">{spendIndex}</span>
              </label>
            </div>
            <div className=" flex flex-col space-y-1">
              <div className=" flex items-center justify-between w-full text-blue-900 font-semibold">
                <span>0</span>
                <span>100</span>
              </div>
              <input
                id="default-range"
                type="range"
                min="0"
                max="100"
                value={growthRate}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-[#1e3a8a]"
                onChange={(e) => setGrowthRate(e.target.value)}
              />
              <label
                htmlFor="default-range"
                className="block mb-2 text-sm font-medium text-blue-900 text-center"
              >
                Economy Growth Rate:{" "}
                <span className=" text-lg font-semibold">{growthRate}%</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardStats;
