import { ConnectWallet } from "@thirdweb-dev/react";
import { Routes, Route } from "react-router-dom";
import { Navbar, Sidebar } from './components';
import { Profile } from './pages';

export default function Home() {
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>

      <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<Profile />} />
          <Route path="/campaign-details/:id" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}
