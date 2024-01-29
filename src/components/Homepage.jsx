import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import CustomHeader from "../layouts/CustomHeader";

function Homepage() {
  const [file, setFile] = useState();
  const [uploadedFile, setUploadedFile] = useState();
  const [error, setError] = useState();

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const url = "http://localhost:8080/stockhelper/upload";
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
      })
      .catch((error) => {
        console.error("Error uploading file: ", error);
        setError(error);
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
      {error && <p>Error uploading file: {error.message}</p>}
    </div>
  );
}

export default Homepage;
