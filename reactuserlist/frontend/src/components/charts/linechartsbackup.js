import React from 'react'
import { ResponsiveContainer,LineChart,Line,CartesianGrid,XAxis,YAxis,Legend,Tooltip} from 'recharts'


const data = [
    {
        name : "Reactjs",
        student : 50,
        fees : 100
    },
    {
        name : "Nodejs",
        student : 30,
        fees : 50
    },
    {
        name : "Java",
        student : 45,
        fees : 80
    },
    {
        name : "Php",
        student : 10,
        fees : 50
    },
    {
        name : "Anguler",
        student : 60,
        fees : 10
    }
]

const Linecharts = () => {
    return (
        <div>
        <div>
            <h3 style={{fontWeight:700,color:"blue",marginLeft:"450px",marginTop:"50px"}}>Line Charts</h3>
        </div>
        <div style={{width:"1000px",justifyContent:"center",marginTop:"100px"}}>
        <ResponsiveContainer width="100%" aspect={3}>
            <LineChart data={data}>
                <Line dataKey="student" stroke="red" activeDot={{ r: 8 }}/>
                <Line dataKey="fees" stroke="black" activeDot={{ r: 8 }}/>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke="blue"/>
                <Tooltip />
                <YAxis stroke="blue"/>
                <Legend />
            </LineChart>
           
        </ResponsiveContainer>
        </div>
        </div>
    )
}

export default Linecharts
