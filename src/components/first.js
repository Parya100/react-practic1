import React from "react";

const PrintPage = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md text-center">
      <h1 className="text-2xl font-bold mb-4"> Printable Page </h1>{" "}
      <p className="mb-4">
        This is a simple page that can be printed using the button below.{" "}
      </p>{" "}
      <button
        onClick={handlePrint}
        className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Print Page{" "}
      </button>{" "}
    </div>
  )
};

export default PrintPage;
