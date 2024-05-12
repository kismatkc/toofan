"use client"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);






const DoughnutChart = ({accounts}: DoughnutChartProps)=>{
const data = {
  datasets:[
    {
      label: "Banks",
      data: [500,1000],
      backgroundColor: ["red","green"]
      
    }
  ],
  labels: ["bank 1","bank 2"]
}
  
  return (
<Doughnut data={data} options={

{

  cutout: "60%",
  plugins:{

    legend: {
      display: false
    }
  }
}
}/>
  )
}


export default DoughnutChart 
