import React from 'react';

const SidebarButton = ({ image: Icon, title, active = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-4 p-3 px-6 mx-4 rounded-lg 
                  ${active ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:bg-zinc-800 hover:text-white'} 
                  transition-colors duration-200 cursor-pointer focus:outline-none`}
      aria-label={title}
    >
      <Icon className="text-xl" />
      <p className="text-sm font-medium">{title}</p>
    </button>
  );
};

export default SidebarButton;
