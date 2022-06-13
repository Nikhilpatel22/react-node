
// import React, { PureComponent } from 'react';
// import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

// const data = [
//     { name: 'Group A', value: 1000 },
//     { name: 'Group B', value: 3000 },
//     { name: 'Group C', value: 2000 },
//     { name: 'Group D', value: 1500 },
// ];

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
// const Piecharts = () => {

// const RADIAN = Math.PI / 180;
// const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
//     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//     const x = cx + radius * Math.cos(-midAngle * RADIAN);
//     const y = cy + radius * Math.sin(-midAngle * RADIAN);

//     return (
//         <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
//             {`${(percent * 100).toFixed(0)}%`}
//         </text>
//     );
// };

//     return (
//         <div>
//             <div>
//                 <h3 style={{ fontWeight: 700, color: "blue", marginLeft: "450px", marginTop: "50px" }}>Pie Charts</h3>

//             </div>
//             <div style={{ width: "1000px", justifyContent: "center", height: "500px", marginTop: "10px" }}>
//                 <ResponsiveContainer width="100%" height="100%">
//                     <PieChart width={400} height={400}>
//                         <Pie
//                             data={data}
//                             cx="50%"
//                             cy="50%"
//                             labelLine={false}
//                             label={renderCustomizedLabel}
//                             outerRadius={80}
//                             fill="#8884d8"
//                             dataKey="value"
//                         >
//                             {data.map((entry, index) => (
//                                 <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                             ))}
//                         </Pie>
//                     </PieChart>
//                 </ResponsiveContainer>
//             </div>
//         </div>
//     );
// }

// export default Piecharts

import React from 'react'
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 },
    { name: 'Group F', value: 189 },
];

const Piecharts = () => {
    return (
        <div>
            <div>
                <h3 style={{ fontWeight: 700, color: "blue", marginLeft: "450px", marginTop: "50px" }}>Pie Charts</h3>

            </div>
            <div style={{ width: "1000px", justifyContent: "center", height: "500px", marginTop: "10px" }}>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={400} height={400} >
                        <Pie dataKey="value"
                            isAnimationActive={false}
                            data={data01}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="red"
                            label />
                            <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default Piecharts
