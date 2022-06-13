import React from 'react'
import { ResponsiveContainer, BarChart, Bar, Cell, CartesianGrid, XAxis, YAxis, Legend, Tooltip } from 'recharts'

const data = [
    {
        name: "Reactjs",
        student: 50,
        fees: 100
    },
    {
        name: "Nodejs",
        student: 30,
        fees: 50
    },
    {
        name: "Java",
        student: 45,
        fees: 80
    },
    {
        name: "Php",
        student: 10,
        fees: 50
    },
    {
        name: "Anguler",
        student: 60,
        fees: 10
    }
]



const Barcharts = () => {
    return (
        <div>
            <div>
                <h3 style={{ fontWeight: 700, color: "blue", marginLeft: "450px", marginTop: "50px" }}>Bar Charts</h3>

            </div>
            <div style={{ width: "1000px", justifyContent: "center",height:"500px", marginTop: "100px" }}>
                <ResponsiveContainer width="100%" aspect={3}>
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="student" fill="red" />
                        <Bar dataKey="fees" fill="black" />
                        <YAxis />

                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default Barcharts
