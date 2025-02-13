"use client";

import { useState } from "react";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

export default function DataPengguna() {
  // Data dummy pengguna
  const [users, setUsers] = useState([
    {
      id: 1,
      nama: "Aldo Pratama",
      username: "aldo123",
      password: "******",
      akses: "Admin",
    },
    {
      id: 2,
      nama: "Bella Safira",
      username: "bella98",
      password: "******",
      akses: "User",
    },
    {
      id: 3,
      nama: "Cahyo Nugroho",
      username: "cahyo99",
      password: "******",
      akses: "User",
    },
    {
      id: 4,
      nama: "Dewi Ananda",
      username: "dewian",
      password: "******",
      akses: "Moderator",
    },
  ]);

  const [search, setSearch] = useState("");
  const [addModal, setAddModal] = useState(false);

  // State untuk data baru
  const [newUser, setNewUser] = useState({
    id: "",
    nama: "",
    username: "",
    password: "",
    akses: "",
  });

  // Fungsi tambah pengguna
  const handleAddUser = () => {
    if (newUser.nama && newUser.username && newUser.password && newUser.akses) {
      setUsers([...users, { ...newUser, id: users.length + 1 }]);
      setNewUser({ id: "", nama: "", username: "", password: "", akses: "" });
      setAddModal(false);
    }
  };

  // Fungsi hapus pengguna
  const handleDeleteUser = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  // Filter data berdasarkan pencarian
  const filteredUsers = users.filter(
    (user) =>
      user.nama.toLowerCase().includes(search.toLowerCase()) ||
      user.username.toLowerCase().includes(search.toLowerCase()) ||
      user.akses.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-screen h-screen bg-gray-100 p-3 flex gap-x-3">
      {/* Sidebar */}
      <Sidebar />

      {/* Wrapper untuk Navbar & Konten */}
      <div className="flex-1">
        <Navbar />

        {/* Konten utama */}
        <div className="mt-[92px] p-4 bg-white shadow-md rounded-md">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-semibold">Data Pengguna</h1>
            <button
              className="bg-[#AAB396] text-white px-4 py-2 rounded-md"
              onClick={() => setAddModal(true)}
            >
              Tambah Pengguna
            </button>
          </div>

          {/* Input Pencarian */}
          <input
            type="text"
            placeholder="Cari pengguna..."
            className="w-full p-2 border rounded-md mb-3"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Table Wrapper */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 shadow-md">
              <thead className="bg-[#AAB396] text-white sticky top-0">
                <tr>
                  <th className="py-1 px-2 border">ID</th>
                  <th className="py-1 px-2 border">Nama Lengkap</th>
                  <th className="py-1 px-2 border">Username</th>
                  <th className="py-1 px-2 border">Kata Sandi</th>
                  <th className="py-1 px-2 border">Hak Akses</th>
                  <th className="py-1 px-2 border">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user) => (
                  <tr key={user.id} className="text-center border">
                    <td className="py-1 px-2 border">{user.id}</td>
                    <td className="py-1 px-2 border">{user.nama}</td>
                    <td className="py-1 px-2 border">{user.username}</td>
                    <td className="py-1 px-2 border">{user.password}</td>
                    <td className="py-1 px-2 border">{user.akses}</td>
                    <td className="py-1 px-2 border">
                      <button className="bg-yellow-400 text-white px-2 py-1 rounded mr-2">
                        Edit
                      </button>
                      <button
                        className="bg-red-500 text-white px-2 py-1 rounded"
                        onClick={() => handleDeleteUser(user.id)}
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Modal Tambah Pengguna */}
        {addModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[350px]">
              <h2 className="text-lg font-semibold mb-4">Tambah Pengguna</h2>

              <input
                type="text"
                placeholder="Nama Lengkap"
                className="w-full p-2 border rounded-md mb-2"
                value={newUser.nama}
                onChange={(e) =>
                  setNewUser({ ...newUser, nama: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Username"
                className="w-full p-2 border rounded-md mb-2"
                value={newUser.username}
                onChange={(e) =>
                  setNewUser({ ...newUser, username: e.target.value })
                }
              />
              <input
                type="password"
                placeholder="Kata Sandi"
                className="w-full p-2 border rounded-md mb-2"
                value={newUser.password}
                onChange={(e) =>
                  setNewUser({ ...newUser, password: e.target.value })
                }
              />
              <select
                className="w-full p-2 border rounded-md mb-2"
                value={newUser.akses}
                onChange={(e) =>
                  setNewUser({ ...newUser, akses: e.target.value })
                }
              >
                <option value="">Pilih Hak Akses</option>
                <option value="Admin">Admin</option>
                <option value="User">User</option>
                <option value="Moderator">Moderator</option>
              </select>

              <div className="flex justify-end gap-2">
                <button
                  className="bg-gray-400 text-white px-3 py-2 rounded"
                  onClick={() => setAddModal(false)}
                >
                  Batal
                </button>
                <button
                  className="bg-green-500 text-white px-3 py-2 rounded"
                  onClick={handleAddUser}
                >
                  Simpan
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
