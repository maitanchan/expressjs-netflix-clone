import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useEffect, useMemo, useState } from "react";
import newRequest from "../../utils/newRequest";

export default function Home() {

  const months = useMemo(() => [

    "Tháng 1",
    "Tháng 2",
    "Tháng 3",
    "Tháng 4",
    "Tháng 5",
    "Tháng 6",
    "Tháng 7",
    "Tháng 8",
    "Tháng 9",
    "Tháng 10",
    "Tháng 12"
  ]
  ,
  []
  )

  const [userStats, setUserStats] = useState([])

  useEffect(() => {

    const fetchUserStats = async () => {

       try {

        const res = await newRequest.get(`/users/stats`, {
          headers: {
            token: "bear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NmFhYzBiZDcxZmFmMzc5NjVjMjc3NyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4NDg5NTY1NCwiZXhwIjoxNjg1MzI3NjU0fQ.5fCAj2cu9uDQL98U1RabdAsi_aMbJXwEC2FKEq1NG60"
          }
        })

        const statsSort = res.data.sort((a, b) => {

            return a._id - b._id 

        })

       setUserStats(statsSort.map((item) => ({
          
            name: months[item._id - 1],
            "New User": item.total

      })))
        
       } catch (err) {

        console.log(err)
        
       }

    }

    fetchUserStats()

  },[months])

  return (

    <div className="home">

      <FeaturedInfo />

      <Chart 
           data={userStats} 
           title="Thống kê người dùng" 
           grid 
           dataKey="New User"/>

      <div className="homeWidgets">
        <WidgetSm/>
        <WidgetLg/>
      </div>

    </div>
  );
}
