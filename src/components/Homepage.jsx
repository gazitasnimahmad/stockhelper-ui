import axios from "axios";
import React, { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import CustomHeader from "../layouts/CustomHeader";

function Homepage() {
  const [file, setFile] = useState();
  const [uploadedFile, setUploadedFile] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  function handleSubmit(event) {
    setIsLoading(true);
    event.preventDefault();
    const url = "http://localhost:8080/stockhelper/upload";
    // const url = "https://stock-helper-dev.onrender.com/stockhelper/upload";
    const formData = new FormData();
    formData.append("file", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios
      .post(url, formData, config)
      .then((response) => {
        console.log(response.data);
        setUploadedFile(response.data.file);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error uploading file: ", error);
        setError(error);
        setIsLoading(false);
      });
  }

  return (
    <div className="App">
      <CustomHeader />
      
      <form onSubmit={handleSubmit}>
        <br />
        <h2>Upload NSE data</h2>
        <br />
        <input type="file" onChange={handleChange} />
        <Button type="submit" variant="primary">
          Upload
        </Button>
      </form>
      
      {isLoading ? <Spinner animation="border" /> : <h4></h4>}
      {error && <p>Error uploading file: {error.message}</p>}
    </div>
  );
}

export default Homepage;
