import React from "react";

const TopNavbar = () => {
  return (
    <div className="sticky z-10 top-0 bg-white w-full px-4 py-2 flex items-center justify-between flex-wrap gap-2">
      <div>
        <select
          name=""
          id=""
          className=" border-blue-900 border-2 rounded px-4 py-1"
        >
          <option value="transaction">Transaction</option>
          <option value="transaction">Transaction</option>
          <option value="transaction">Transaction</option>
          <option value="transaction">Transaction</option>
          <option value="transaction">Transaction</option>
          <option value="transaction">Transaction</option>
        </select>
      </div>
      <div className=" space-x-4">
        <span className=" font-semibold text-blue-900">Filter</span>
        <select
          name=""
          id=""
          className=" border-blue-900 border-2 rounded px-4 py-1"
        >
          <option value="transaction">Date</option>
          <option value="transaction">Date</option>
          <option value="transaction">Date</option>
          <option value="transaction">Date</option>
          <option value="transaction">Date</option>
          <option value="transaction">Date</option>
        </select>
      </div>
    </div>
  );
};

export default TopNavbar;
