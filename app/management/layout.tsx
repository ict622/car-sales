import React from 'react';

// --- Icon Components ---
const HomeIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
);
const CarIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14h2a2 2 0 002-2V7a2 2 0 00-2-2h-1.382a2 2 0 00-1.28.468l-6 4.5a2 2 0 000 3.064l6 4.5a2 2 0 001.28.468H17z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 14h2a2 2 0 002-2V7a2 2 0 00-2-2H3v9z" /></svg>
);
const SettingsIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);
const UserIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
);

// --- Layout Components ---
const Sidebar = () => (
  <aside className="bg-gray-800 text-white w-64 min-h-screen p-4 flex flex-col fixed">
    <div className="text-2xl font-bold mb-10">
      <a href="/management">AutoLux</a>
    </div>
    <nav>
      <ul>
        <li className="mb-2"><a href="#" className="flex items-center p-2 bg-gray-700 rounded-md"><HomeIcon /><span className="ml-3">Dashboard</span></a></li>
        <li className="mb-2"><a href="#" className="flex items-center p-2 hover:bg-gray-700 rounded-md"><CarIcon /><span className="ml-3">Listings</span></a></li>
        <li className="mb-2"><a href="#" className="flex items-center p-2 hover:bg-gray-700 rounded-md"><SettingsIcon /><span className="ml-3">Settings</span></a></li>
      </ul>
    </nav>
    <div className="mt-auto"><a href="/" className="flex items-center p-2 hover:bg-gray-700 rounded-md"><span className="mr-3">←</span><span>Back to Site</span></a></div>
  </aside>
);

const Header = () => (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-700">Dashboard</h2>
        <div className="flex items-center">
            <div className="relative">
                <input type="text" placeholder="Search..." className="w-full px-4 py-2 border rounded-md" />
            </div>
            <div className="ml-4">
                <UserIcon />
            </div>
        </div>
    </header>
);

// --- Main Layout ---
export default function ManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <Sidebar />
      <div className="flex-1 ml-64">
        <Header />
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}
