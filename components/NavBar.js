/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { HiOutlineBuildingLibrary } from 'react-icons/hi2';
import { CgProfile } from 'react-icons/cg';
import { HiOutlineNewspaper } from 'react-icons/hi';
import { MdManageSearch } from 'react-icons/md';
import { useRouter } from 'next/router';

export default function NavBar() {
  const router = useRouter();
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg">
      <div className="sidebar-icon">
        <button type="button" className="" onClick={() => router.push('/')}>
          <SideBarIcon icon={<HiOutlineBuildingLibrary size="32" />} />
        </button>
      </div>
      <div>
        <button type="button" className="sidebar-icon" onClick={() => router.push('/profile')}>
          <SideBarIcon icon={<CgProfile size="32" />} />
        </button>
      </div>
      <div>
        <button type="button" className="sidebar-icon" onClick={() => router.push('/mystories')}>
          <SideBarIcon icon={<HiOutlineNewspaper size="32" />} />
        </button>
      </div>
      <div>
        <button type="button" className="sidebar-icon" onClick={() => router.push('/topics')}>
          <SideBarIcon icon={<MdManageSearch size="32" />} />
        </button>
      </div>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
const SideBarIcon = ({ icon, text = 'tooltip💡' }) => (
  <div className="sidebar-icon group">
    {icon}

    <span className="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);
