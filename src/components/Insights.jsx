import React, { useState } from "react";
import CustomHeader from "../layouts/CustomHeader";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import AgGridExample from "./AgGridExample";
import ChartLogic from "./ChartLogic";

const Insights = () => {
  const [error, setError] = useState();
  const [inputValue, setInputValue] = useState("");
  const [stockData, setStockData] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    const url = "http://localhost:8080/stockhelper/insights";

    var myParams = {
      symbol: inputValue,
    };
    axios
      .get(url, { params: myParams })
      .then((response) => {
        setStockData(response);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Unable to fetch details for: ", inputValue);
        setError(error);
      });
  }

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <div>
      <CustomHeader />
      <center>
        <Form onSubmit={handleSubmit}>
          <Form.Group
            className="custom-input"
            controlId="exampleForm.ControlInput1"
            value={inputValue}
            onChange={handleInputChange}
          >
            <Form.Control type="text" placeholder="Enter stock symbol" />
          </Form.Group>
          <Button type="submit" variant="info">
            Search
          </Button>
          <br />
        </Form>
      </center>
      <br />
      <div>
        {stockData != null || stockData != undefined ? (
          <ChartLogic stockData={stockData} className = "chart-style" />
        ) : (
          <center></center>
        )}
      </div>
      <br/><hr/><br/><br/>
      <div>
        {stockData != null || stockData != undefined ? (
          <AgGridExample stockData={stockData} className="custom-input" />
        ) : (
          <center></center>
        )}
      </div>
    </div>
  );
};

export default Insights;
