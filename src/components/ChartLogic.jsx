import React from "react";
import ReactApexChart from "react-apexcharts";

const ChartLogic = (props) => {
  var response = props.stockData;
  const rowData = response?.data?.masterRatios;
  const decision = response?.data?.masterStock;

  const ratioList = [];

  // Iterate over the array of objects using forEach
  rowData.forEach((obj) => {
    // Extract the desired field value and push it to the array
    ratioList.push(obj.dq_by_nt);
  });

  const dateList = [];

  // Iterate over the array of objects using forEach
  rowData.forEach((obj) => {
    // Extract the desired field value and push it to the array
    dateList.push(obj.date);
  });

  const series = [
    {
      name: "DQ BY NT", //will be displayed on the y-axis
      data: ratioList,
    },
  ];
  const options = {
    chart: {
      type: 'bar',
      height: 350
    },
    plotOptions: {
      bar: {
        colors: {
          ranges: [{
            from: -100,
            to: -46,
            color: '#7FFFD4'
          }, {
            from: -45,
            to: 0,
            color: '#fe1919'
          }]
        },
        columnWidth: '80%',
      }
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: dateList, //will be displayed on the x-asis
    },
  };

  //

  

  return (
    <div>
      <ReactApexChart options={options} type="bar" series={series} width="80%" height={350}/>
      <h4>Sum of Ratios: {decision.sum}</h4>
      <h4>Do we need to invest in this stock now : {decision.goodToGo} </h4>
    </div>
  );
};

export default ChartLogic;
