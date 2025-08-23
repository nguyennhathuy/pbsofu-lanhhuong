import { useState } from 'react';
import './App.css'
import { MODULE_LIST } from './constants';
import { ModalForm, type FieldConfig } from './components/ModalForm';
import type { User } from './types';
import { motion } from "framer-motion";
import NCC from './components/NCC/NCC';
import LenhSanXuat from './components/LenhSanXuat/LenhSanXuat';
import TonKho from './components/TonKho/TonKho';
import logoCongTy from "./assets/images/logo_cong_ty.jpg";
import XuatKho from './components/XuatKho/XuatKho';
import KiemKe from './components/KiemKe/KiemKe';
import NhapKho from './components/NhapKho/NhapKho';
import DashboardNguonLuc from './components/DashboardNguonLuc/DashboardNguonLuc';
import DashboardHieuSuat from './components/DashboardHieuSuat/DashboardHieuSuat';

function App() {
  const [currentPage, setCurrentPage] = useState<string>(MODULE_LIST[0]['name']);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState(false);
  const [editUser, setEditUser] = useState<User | null>(null);
  const fields: FieldConfig[] = [
    { name: "name", label: "Tên người dùng", type: "text" },
    { name: "email", label: "Email", type: "text" },
    {
      name: "role",
      label: "Vai trò",
      type: "select",
      options: [
        { value: "admin", label: "Admin" },
        { value: "user", label: "User" }
      ]
    }
  ];
  const handleSubmit = (data: User) => {
    if (editUser) {
      console.log("Cập nhật:", data);
    } else {
      console.log("Tạo mới:", data);
    }
  };
  const handleChangeCurrentPage = (page: string) => {
    setCurrentPage(page)
  }
  return (
    <>
      <div className="flex h-screen bg-gray-200">
        <motion.aside
          initial={{ width: 256 }}
          animate={{ width: sidebarOpen ? 256 : 80 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-y-0 left-0 z-30 flex-shrink-0 overflow-y-auto bg-white shadow-lg lg:static lg:z-auto border-r-[1px] border-gray-100"
        >
          <div className="flex h-full flex-col">
            <div className="flex h-[50px] flex-shrink-0 items-center justify-start px-4 border-b">
              <img
                src={logoCongTy}
                alt="Logo công ty"
                className={`h-[70px] w-[200px] object-contain ${!sidebarOpen ? "hidden" : ""}`}
              />
            </div>
            <nav className="flex-1 space-y-2 px-2 py-4">
              {
                MODULE_LIST.map(
                  (m, i) => {
                    const IconComponent = m.icon;
                    return (
                      <a
                        href="#"
                        key={i}
                        onClick={
                          () => {
                            handleChangeCurrentPage(m.name)
                          }
                        }
                        className={`flex items-center rounded-lg p-2 text-sm transition-colors duration-300 ${currentPage === m.name ? 'bg-indigo-100 text-indigo-600' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'}`}
                      >
                        <IconComponent size={20}/>
                        <span className={`ml-4 font-medium ${!sidebarOpen ? 'hidden' : ''}`}>
                          { m.name }
                        </span>
                      </a>
                    );
                  }
                )
              }
            </nav>
            <div className="flex-shrink-0 border-t p-2">
              <button 
                className="hidden w-full items-center justify-center rounded-lg p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-indigo-600 focus:outline-none lg:flex"
                onClick={
                  () => {
                    setSidebarOpen(
                      prev => !prev
                    )
                  }
                }
              >
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 shrink-0"
                  animate={{ rotate: sidebarOpen ? 0 : 180 }}
                  transition={{ duration: 0.3 }}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                </motion.svg>
                <span className={`ml-2 text-sm font-medium ${!sidebarOpen ? 'hidden' : ''}`}>
                  Thu gọn
                </span>
              </button>
            </div>
          </div>
        </motion.aside>
        <div
          className="fixed inset-0 z-20 bg-black opacity-50 transition-opacity lg:hidden"
        >
        </div>
        <div 
          className="flex flex-1 flex-col overflow-hidden"
        >
          <header className="flex h-[50px] flex-shrink-0 items-center justify-between border-b bg-white px-4 md:px-6">
            <button className="text-gray-500 hover:text-indigo-600 focus:outline-none lg:hidden">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2"
                  d="M4 6h16M4 12h16m-7 6h7" 
                />
              </svg>
            </button>
            <div className="flex-1"></div>
            <div className="flex items-center space-x-4">
              <button className="relative rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" 
                  />
                </svg>
              </button>
              <div className="relative">
                <button className="flex items-center space-x-2 rounded-md p-2 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                  <span className="font-medium text-gray-700">Tên Tài Khoản</span>
                  <svg 
                    className="h-5 w-5 text-gray-400" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path 
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd" 
                    />
                  </svg>
                </button>
                <div 
                  x-show="dropdownOpen"
                  x-transition:enter="transition ease-out duration-100"
                  x-transition:enter-start="transform opacity-0 scale-95"
                  x-transition:enter-end="transform opacity-100 scale-100"
                  x-transition:leave="transition ease-in duration-75"
                  x-transition:leave-start="transform opacity-100 scale-100"
                  x-transition:leave-end="transform opacity-0 scale-95"
                  className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <a 
                    href="#" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Cài đặt tài khoản
                  </a>
                  <a 
                    href="#" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Đổi mật khẩu
                  </a>
                  <a 
                    href="#" 
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Quản lý đăng nhập
                  </a>
                  <div className="border-t border-gray-100"></div>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Đăng xuất</a>
                </div>
              </div>
            </div>
          </header>
          <main className="flex-1 overflow-y-auto overflow-x-hidden pl-[10px] pr-[10px] bg-white">
            {(() => {
              switch (currentPage) {
                case "Lệnh sản xuất":
                  return <LenhSanXuat 
                            setEditUser={setEditUser}
                            setIsOpen={setIsOpen}
                          />;
                case "Nhà cung cấp":
                  return <NCC 
                            setEditUser={setEditUser}
                            setIsOpen={setIsOpen}
                          />;
                case "Tồn kho":
                  return <TonKho 
                            setEditUser={setEditUser}
                            setIsOpen={setIsOpen}
                          />;
                case "Nhập kho":
                  return <NhapKho 
                            setEditUser={setEditUser}
                            setIsOpen={setIsOpen}
                          />;
                case "Xuất kho":
                  return <XuatKho 
                            setEditUser={setEditUser}
                            setIsOpen={setIsOpen}
                          />;
                case "Kiểm kê":
                  return <KiemKe 
                            setEditUser={setEditUser}
                            setIsOpen={setIsOpen}
                          />;
                case "Báo cáo nguồn lực":
                  return <DashboardNguonLuc 
                          />;
                case "Báo cáo hiệu suất sản xuất":
                  return <DashboardHieuSuat
                          />;
                default:
                  return <div>Đang build .....</div>;
              }
            })()}
          </main>
        </div>
      </div>
      <ModalForm<User>
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={editUser ? "Chỉnh sửa User" : "Tạo mới User"}
        fields={fields}
        initialData={editUser ?? {}}
        onSubmit={handleSubmit}
      />
    </>
  )
}

export default App;