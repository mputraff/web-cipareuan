import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList
} from 'recharts';

// Data
const educationData = [
  { pendidikan: 'SD / Sederajat', 'Laki-laki': 282, 'Perempuan': -385 },
  { pendidikan: 'SMP / Sederajat', 'Laki-laki': 363, 'Perempuan': -222 },
  { pendidikan: 'SMA / Sederajat', 'Laki-laki': 177, 'Perempuan': -183 },
  { pendidikan: 'Perguruan Tinggi', 'Laki-laki': 10, 'Perempuan': -12 },
];

// Format angka di X axis → hilangkan minus
const formatXAxisTick = (tickItem) => Math.abs(tickItem);

// Tooltip sederhana
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: '#fff',
          border: '1px solid #ccc',
          borderRadius: '6px',
          padding: '8px 12px'
        }}
      >
        <p style={{ fontWeight: 600, marginBottom: 4 }}>{label}</p>
        {payload.map((entry, index) => (
          <p key={index} style={{ margin: 0, color: entry.color }}>
            {entry.name}: {Math.abs(entry.value)}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const EducationChart = () => {
  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={educationData}
          margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
          stackOffset="sign"
        >
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis type="number" tickFormatter={formatXAxisTick} />
          <YAxis type="category" dataKey="pendidikan" width={120} />

          <Tooltip content={<CustomTooltip />} />
          <Legend />

          <Bar dataKey="Laki-laki" name="Laki-laki" fill="#3b82f6" stackId="stack">
            <LabelList dataKey="Laki-laki" position="right" formatter={(v) => Math.abs(v)} />
          </Bar>

          <Bar dataKey="Perempuan" name="Perempuan" fill="#ec4899" stackId="stack">
            <LabelList dataKey="Perempuan" position="left" formatter={(v) => Math.abs(v)} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EducationChart;
