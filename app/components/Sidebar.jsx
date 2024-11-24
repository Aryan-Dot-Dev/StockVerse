import React, { useState } from 'react';
import SidebarButton from './SidebarButton';
import { LuLayoutGrid } from "react-icons/lu";
import { FaChartLine } from "react-icons/fa6";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import { IoWalletOutline } from "react-icons/io5";

const Sidebar = () => {
  const [tab, setTab] = useState('Dashboard');

  return (
    <div className="flex flex-col bg-[#151515] px-1 py-3 w-fit max-h-max gap-3 rounded-br-xl">
      <SidebarButton
        image={LuLayoutGrid}
        title="Dashboard"
        active={tab === 'Dashboard'}
        onClick={() => setTab('Dashboard')}
      />
      <SidebarButton
        image={FaChartLine}
        title="Stock"
        active={tab === 'Stock'}
        onClick={() => setTab('Stock')}
      />
      <SidebarButton
        image={MdOutlineBookmarkBorder}
        title="Favorite"
        active={tab === 'Favorite'}
        onClick={() => setTab('Favorite')}
      />
      <SidebarButton
        image={IoWalletOutline}
        title="Wallet"
        active={tab === 'Wallet'}
        onClick={() => setTab('Wallet')}
      />
    </div>
  );
};

export default Sidebar;
