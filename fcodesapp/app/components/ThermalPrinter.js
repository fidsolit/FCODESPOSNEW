import React from "react";
import printJS from "print-js";

const ThermalPrinter = () => {
  // Function to handle printing
  const handlePrint = () => {
    printJS({
      printable: "printable-content", // ID of the element to print
      type: "html",
      style: `
        body { font-size: 12px; } /* Adjust for thermal printer */
        table { width: 100%; }
      `,
    });
  };

  return (
    <div>
      {/* Content to be printed */}
      <div id="printable-content">
        <h1>Your Data</h1>
        <table>
          <thead>
            <tr>
              <th>Header 1</th>
              <th>Header 2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Data 1</td>
              <td>Data 2</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Button to trigger printing */}
      <button onClick={handlePrint}>Print</button>
    </div>
  );
};

export default ThermalPrinter;
