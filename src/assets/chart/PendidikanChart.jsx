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

// 1. Data dari tabel pendidikan Anda
// Nilai untuk 'Perempuan' dibuat negatif agar bar mengarah ke kiri
const educationData = [
  { pendidikan: 'SD / Sederajat', 'Laki-laki': 282, 'Perempuan': -385 },
  { pendidikan: 'SMP / Sederajat', 'Laki-laki': 363, 'Perempuan': -222 },
  { pendidikan: 'SMA / Sederajat', 'Laki-laki': 177, 'Perempuan': -183 },
  { pendidikan: 'Perguruan Tinggi', 'Laki-laki': 10, 'Perempuan': -12 },
];

// 2. Fungsi untuk format label sumbu X (menghilangkan tanda minus)
const formatXAxisTick = (tickItem) => {
  return Math.abs(tickItem);
};

// 3. Fungsi untuk format Tooltip (menampilkan nilai absolut saat hover)
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    // Menemukan data untuk Laki-laki dan Perempuan berdasarkan nama
    const maleData = payload.find(p => p.dataKey === 'Laki-laki');
    const femaleData = payload.find(p => p.dataKey === 'Perempuan');

    return (
      <div className="custom-tooltip" style={{ backgroundColor: '#fff', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
        <p className="label" style={{ fontWeight: 'bold' }}>{label}</p>
        {maleData && <p style={{ color: maleData.color }}>{`Laki-laki: ${maleData.value}`}</p>}
        {femaleData && <p style={{ color: femaleData.color }}>{`Perempuan: ${Math.abs(femaleData.value)}`}</p>}
      </div>
    );
  }
  return null;
};

// 4. Komponen utama untuk grafik
const EducationChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        layout="vertical"
        data={educationData}
        margin={{ top: 20, right: 40, left: 30, bottom: 5 }}
        stackOffset="sign" // Membuat bar menyebar dari sumbu nol
      >
        <CartesianGrid strokeDasharray="3 3" />
        
        {/* Sumbu X (Jumlah Orang) */}
        <XAxis type="number" tickFormatter={formatXAxisTick} />

        {/* Sumbu Y (Tingkat Pendidikan) */}
        <YAxis 
          type="category" 
          dataKey="pendidikan" 
          width={110} // Beri ruang lebih jika label panjang
        />

        {/* Tooltip kustom saat hover */}
        <Tooltip cursor={{fill: '#f5f5f5'}} content={<CustomTooltip />} />

        {/* Legenda */}
        <Legend />

        {/* Bar untuk Laki-laki */}
        <Bar dataKey="Laki-laki" name="Laki-laki" fill="#3b82f6" stackId="stack">
            {/* Menampilkan label angka di dalam/samping bar */}
            <LabelList dataKey="Laki-laki" position="right" offset={8} style={{ fill: '#000' }}/>
        </Bar>

        {/* Bar untuk Perempuan */}
        <Bar dataKey="Perempuan" name="Perempuan" fill="#ec4899" stackId="stack">
            {/* Menampilkan label angka (nilai absolut) di dalam/samping bar */}
            <LabelList dataKey="Perempuan" position="left" offset={8} formatter={(value) => Math.abs(value)} style={{ fill: '#000' }}/>
        </Bar>

      </BarChart>
    </ResponsiveContainer>
  );
};

export default EducationChart;