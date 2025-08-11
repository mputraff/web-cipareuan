// Import library yang diperlukan dari React dan Recharts
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

// 1. Data dari tabel Anda
// Nilai untuk 'Perempuan' dibuat negatif untuk ditampilkan di sisi kiri
// Titik ribuan (misal: 1.048) diubah menjadi angka (1048)
const populationData = [
  { usia: '0-4', 'Laki-laki': 409, 'Perempuan': -287 },
  { usia: '5-19', 'Laki-laki': 1048, 'Perempuan': -905 },
  { usia: '20-59', 'Laki-laki': 2017, 'Perempuan': -1821 },
  { usia: '60+', 'Laki-laki': 382, 'Perempuan': -253 },
];

// 2. Fungsi untuk format label (agar tidak ada tanda minus di sumbu X)
const formatXAxisTick = (tickItem) => {
  return Math.abs(tickItem);
};

// 3. Fungsi untuk format Tooltip (agar tidak ada tanda minus saat hover)
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip" style={{ backgroundColor: '#fff', border: '1px solid #ccc', padding: '10px' }}>
        <p className="label">{`${label}`}</p>
        <p style={{ color: '#8884d8' }}>{`Laki-laki: ${payload[0].value}`}</p>
        <p style={{ color: '#82ca9d' }}>{`Perempuan: ${Math.abs(payload[1].value)}`}</p>
      </div>
    );
  }
  return null;
};


// 4. Komponen utama untuk grafik
const PopulationChart = () => {
  return (
    // ResponsiveContainer membuat grafik menyesuaikan ukuran parent-nya
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        layout="vertical" // Membuat bar menjadi horizontal
        data={populationData}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        stackOffset="sign" // Kunci untuk membuat bar menyebar dari tengah
      >
        <CartesianGrid strokeDasharray="3 3" />
        
        {/* Sumbu X (Jumlah Penduduk) */}
        <XAxis type="number" tickFormatter={formatXAxisTick} />

        {/* Sumbu Y (Kelompok Usia) */}
        <YAxis type="category" dataKey="usia" width={100} />

        {/* Tooltip kustom saat hover */}
        <Tooltip content={<CustomTooltip />} />

        {/* Legenda untuk Laki-laki dan Perempuan */}
        <Legend />

        {/* Bar untuk Laki-laki (nilai positif) */}
        <Bar dataKey="Laki-laki" fill="#8884d8" stackId="stack">
            <LabelList dataKey="Laki-laki" position="right" />
        </Bar>

        {/* Bar untuk Perempuan (nilai negatif) */}
        <Bar dataKey="Perempuan" fill="#82ca9d" stackId="stack">
            <LabelList dataKey="Perempuan" position="left" formatter={(value) => Math.abs(value)} />
        </Bar>

      </BarChart>
    </ResponsiveContainer>
  );
};

export default PopulationChart;