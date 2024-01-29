import React, { useRef } from "react";
import { AgGridReact } from "ag-grid-react";

const AgGridExample = (props) => {
  var response = props.stockData;
  const rowData = response?.data?.stockRatioAndFactor;
  console.log("rowData", rowData);

  // Column definitions
  const columnDefs = [
    { headerName: "symbol", field: "symbol" },
    { headerName: "date", field: "date" },
    { headerName: "avg_close_price", field: "avg_close_price" },
    { headerName: "avg_open_price", field: "avg_open_price" },
    { headerName: "sum_of_trades", field: "sum_of_trades" },
    { headerName: "sum_delivery_qnty", field: "sum_delivery_qnty" },
    { headerName: "factor", field: "factor" },
    { headerName: "dq_by_nt", field: "dq_by_nt" },
  ];

  const autoSizeStrategy = {
    type: "fitCellContents",
  };

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <div
        className="ag-theme-alpine"
        style={{ width: "100%", height: "100%" }}
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          autoSizeStrategy={autoSizeStrategy}
        />
      </div>
    </div>
  );
};

export default AgGridExample;
