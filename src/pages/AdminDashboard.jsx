import { useState } from "react";
import {
  Home,
  Newspaper,
  Settings,
  LogOut,
  BarChart,
  Menu,
  X,
} from "lucide-react";
import adminPhoto from "../assets/img/profile.jpg"; // ganti dengan foto profil admin
import beritaList from "../assets/data/beritaData";
import AddNews from "../components/admin/AddNews";

export default function AdminDashboard() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [berita, setBerita] = useState(beritaList);

  const menuItems = [
    { name: "Dashboard", icon: <Home size={20} /> },
    { name: "News", icon: <Newspaper size={20} /> },
    { name: "Reports", icon: <BarChart size={20} /> },
    { name: "Settings", icon: <Settings size={20} /> },
  ];

  const handleAddNews = (newBerita) => {
    setBerita([newBerita, ...berita]);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`fixed md:static inset-y-0 left-0 z-40 w-64 bg-white shadow-lg flex flex-col transform 
        transition-transform duration-300 ease-in-out 
        ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {/* Profile Admin */}
        <div className="flex flex-col items-center py-6 border-b">
          <img
            src={adminPhoto}
            alt="Admin"
            className="w-20 h-20 rounded-full object-cover mb-3"
          />
          <h2 className="text-lg font-semibold text-gray-800">
            Admin Cipareuan
          </h2>
          <p className="text-sm text-gray-500">Administrator</p>
        </div>

        {/* Menu */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {menuItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                setActiveMenu(item.name);
                setIsSidebarOpen(false); // auto close di mobile
              }}
              className={`flex items-center w-full px-4 py-2 rounded-lg text-left transition 
                ${
                  activeMenu === item.name
                    ? "bg-blue-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              <span className="mr-3">{item.icon}</span>
              {item.name}
            </button>
          ))}
        </nav>

        {/* Logout */}
        <div className="px-4 py-4 border-t">
          <button className="flex items-center w-full px-4 py-2 text-gray-700 rounded-lg hover:bg-gray-100">
            <LogOut size={20} className="mr-3" /> Logout
          </button>
        </div>
      </aside>

      {/* Overlay (untuk mobile) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 p-6 md:p-8">
        {/* Top bar untuk mobile */}
        <div className="flex items-center justify-between mb-6 md:hidden">
          <h1 className="text-xl font-bold text-gray-800">{activeMenu}</h1>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 rounded-md bg-white shadow-md"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Konten */}
        <h1 className="hidden md:block text-2xl font-bold text-gray-800 mb-6">
          {activeMenu}
        </h1>

        {/* Dashboard Content */}
        {activeMenu === "Dashboard" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-semibold">Total Users</h2>
              <p className="text-3xl font-bold text-blue-600">120</p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-semibold">Reports</h2>
              <p className="text-3xl font-bold text-green-600">45</p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-lg font-semibold">Revenue</h2>
              <p className="text-3xl font-bold text-purple-600">$2,300</p>
            </div>
          </div>
        )}

        {/* Users Content */}
        {activeMenu === "News" && (
          <div className={`bg-white shadow rounded-lg p-6 overflow-x-auto ${isModalOpen ? "blur-xs" : ""}`}>
            <div className="flex justify-between mb-5 items-center">
              <h2 className="text-lg font-semibold mb-4">Berita List</h2>
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white py-2 px-4 rounded"
              >
                Tambah Berita
              </button>
            </div>
            <table className="w-full border-collapse text-sm sm:text-base">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-2 border">ID</th>
                  <th className="p-2 border">Title</th>
                  <th className="p-2 border">Desc</th>
                  <th className="p-2 border">Image</th>
                  <th className="p-2 border">Date</th>
                </tr>
              </thead>
              <tbody>
                {beritaList.map((berita) => (
                  <tr className="text-justify">
                    <td className="p-2 border">{berita.id}</td>
                    <td className="p-2 border">{berita.title}</td>
                    <td className="p-2 border w-1/2">{berita.desc}</td>
                    <td className="p-2 border">
                      <img
                        src={berita.image}
                        alt={berita.alt}
                        className="w-16 h-16 object-cover"
                      />
                    </td>
                    <td className="p-2 border">{berita.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Reports Content */}
        {activeMenu === "Reports" && (
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-semibold">Reports Data</h2>
            <p className="text-gray-600">
              📊 Data laporan akan tampil di sini...
            </p>
          </div>
        )}

        {/* Settings Content */}
        {activeMenu === "Settings" && (
          <div className="bg-white shadow rounded-lg p-6">
            <h2 className="text-lg font-semibold">Settings</h2>
            <p className="text-gray-600">⚙️ Pengaturan dashboard admin</p>
          </div>
        )}
      </main>

      <AddNews
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddNews}
      />
    </div>
  );
}
