import React from 'react';
import './Dashboard.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart, Pie } from 'recharts';

const Dashboard = () => {
    const data = [
        {
            "month": "Jan",
            "investment": 300000,
            "sell": 141,
            "revenue": 30401
        },
        {
            "month": "Feb",
            "investment": 400000,
            "sell": 323,
            "revenue": 65500
        },
        {
            "month": "March",
            "investment": 500000,
            "sell": 226,
            "revenue": 67440
        },
        {
            "month": "April",
            "investment": 600000,
            "sell": 829,
            "revenue": 46605
        },
        {
            "month": "May",
            "investment": 700000,
            "sell": 901,
            "revenue": 50770
        },
        {
            "month": "June",
            "investment": 800000,
            "sell": 970,
            "revenue": 69900
        }
    ]


    return (
        <div className='dashboard'>

            <div>
                <h3>sell vs revenue</h3>
                <BarChart
                    width={400}
                    height={300}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sell" stackId="a" fill="#8884d8" />
                    <Bar dataKey="revenue" stackId="a" fill="#eb4034" />

                </BarChart>
            </div>
            <div>

                <PieChart width={400} height={400}>
                    <Tooltip />
                    <Legend />
                    <Pie data={data} dataKey="sell" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                    <Pie data={data} dataKey="revenue" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                </PieChart>
            </div>
        </div>
    );
};

export default Dashboard;