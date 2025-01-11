import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FaHome } from 'react-icons/fa';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const pathName = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'border-b-2 border-white pb-1 text-[#D98855]'
              : 'hover:border-b-2 hover:border-gray-300 text-white pb-1'
          }
        >
          <FaHome />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allArtifacts"
          className={({ isActive }) =>
            isActive
              ? 'border-b-2 border-white pb-1 text-[#D98855]'
              : 'hover:border-b-2 hover:border-gray-300 text-white pb-1'
          }
        >
          All Artifacts
        </NavLink>
      </li>
      <li>
        <NavLink
          to="contact"
          className={({ isActive }) =>
            isActive
              ? 'border-b-2 border-white pb-1 text-[#D98855]'
              : 'hover:border-b-2 hover:border-gray-300 text-white pb-1'
          }
        >
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/AddArtifacts"
          className={({ isActive }) =>
            isActive
              ? 'border-b-2 border-white pb-1 text-[#D98855]'
              : 'hover:border-b-2 hover:border-gray-300 text-white pb-1'
          }
        >
          Add Artifacts
        </NavLink>
      </li>
    </>
  );

  return (
<div className="navbar md:w-11/12 w-full fixed top-0 left-1/2 transform -translate-x-1/2 z-10 mx-auto py-6 text-white bg-[#302E2F]">
  <div className="navbar-start">
    <div className="dropdown">
      <button
        tabIndex={0}
        className="btn btn-ghost lg:hidden"
        aria-label="Toggle navigation menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </button>
      <ul
        tabIndex={0}
        className="menu menu-sm bg-[#302E2F] font-style border border-white dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
      >
        {pathName}
      </ul>
    </div>
    <div>
  <NavLink
    to="/"
    className="hidden md:flex items-center space-x-2 md:text-2xl uppercase"
  >
    Global{" "}
    <span className="text-[#D98855] text-sm md:text-3xl uppercase mb-1">
      Art
    </span>{" "}
    History
  </NavLink>
  <span className="block md:hidden text-xl uppercase text-[#C28D55]">G.A.H</span>
  <p className="font-style text-[#C28D55] hidden md:block">
    Historical Museum
  </p>
</div>

  </div>
  <div className="navbar-center hidden lg:flex">
    <p></p>
  </div>
  <div className="navbar-end font-style">
    <ul className="menu menu-horizontal gap-3 px-1 hidden items-center lg:flex">
      {pathName}
    </ul>
    {!user && (
      <Link to="/login" className="mr-4 border-b-2 text-white hover:text-[#D98855]">
        Login
      </Link>
    )}
    {user && (
      <div className="dropdown dropdown-hover relative">
        <button tabIndex={0} className="flex items-center" aria-label="User profile menu">
          <img
            alt="User Avatar"
            className="w-10 h-10 rounded-full border-2 p-[2px] border-[#D98855]"
            src={user?.photoURL || 'defaultAvatar.png'}
          />
        </button>
        <ul
          tabIndex={0}
          className="dropdown-content text-sm w-52 bg-[#302E2F] border border-white absolute right-0 rounded-box z-10 p-2 shadow"
        >
          <div className="text-center">
            <img
              src={user.photoURL || 'defaultAvatar.png'}
              className="w-10 h-10 mx-auto rounded-full"
              alt="User Profile"
            />
            <div className="mt-2">
              <li>
                <p className="w-full text-white">{user.displayName || 'Anonymous'}</p>
              </li>
              <li>
                <p className="text-[12px] text-gray-300">{user.email}</p>
              </li>
            </div>
          </div>
          
          <ul className='space-y-2 '>
          <li>
                <Link to="/likedArtifacts" className="block border rounded-lg border-white text-center text-sm text-white hover:bg-[#D98855]">
                  Liked Artifacts
                </Link>
              </li>
              <li>
                <Link to="/myartifactpage" className="block border rounded-lg border-white text-center text-white hover:bg-[#D98855]">
                  My Artifacts
                </Link>
              </li>
          <li className="">
            <Link
              to="/"
              onClick={logOut}
              className="block border rounded-lg border-white text-center text-white hover:bg-[#D98855]"
            >
              Logout
            </Link>
          </li>
          </ul>
        </ul>
      </div>
    )}
  </div>
</div>


  );
};

export default Navbar;
