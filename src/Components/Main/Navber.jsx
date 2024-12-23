import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../AuthProvider/AuthProvider'
import { FaHome } from 'react-icons/fa'

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)

  const pathName = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-white pb-1 text-[#D98855]"
              : "hover:border-b-2 hover:border-gray-300 text-white pb-1"
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
              ? "border-b-2 border-white pb-1 text-[#D98855]"
              : "hover:border-b-2 hover:border-gray-300 text-white pb-1"
          }
        >
          All Artifacts
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/AddArtifacts"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-white pb-1 text-[#D98855]  "
              : "hover:border-b-2 hover:border-gray-300 text-white pb-1"
          }
        >
          Add Artifacts
        </NavLink>
      </li>
    </>
  )

  return (
    <div className="navbar border-b-2 py-8 mb-4 ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm bg-[#302E2F] border border-white dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {pathName}
          </ul>
        </div>
        <NavLink to="/" className="btn btn-ghost md:text-xl">Global Art History</NavLink>
      </div>
      <div className="navbar-center hidden lg:flex"></div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal gap-3 px-1 hidden items-center lg:flex">
          {pathName}
        </ul>
        {!user && (
          <Link to="/login" className="mr-4 border-b-2">
            Login
          </Link>
        )}
        {user && (
          <div className="dropdown dropdown-hover relative">
          <div tabIndex={0} role="button" className="flex items-center">
            <img
              alt="User Avatar"
              className="w-10 h-10 rounded-full border-2 p-[2px] border-[#D98855]"
              src={user?.photoURL || 'defaultAvatar.png'}
            />
          </div>
          <ul
              tabIndex={0}
              className="dropdown-content text-sm  bg-[#302E2F] border border-white absolute right-0  rounded-box z-10 p-2 shadow"
            >
              <div>
                <img
                  src={user.photoURL}
                  className="w-10 h-10 mx-auto rounded-full"
                  alt="User Profile"
                />
                <div className='mt-2'>
                  <li><p className="w-full">{user.displayName || 'Anonymous'}</p></li>
                  <li><p className="text-sm">{user.email}</p></li>
                </div>
              </div>
              <details className="dropdown">
                <summary className="">My Profile</summary>
                <ul className="menu dropdown-content bg-[#302E2F] mr-1 border text-[10px] w-40 border-white rounded-box z-[1] p-2 shadow">
                  <li className='text-white'>
                <Link to="/likedArtifacts">Liked Artifacts Page</Link>
              </li>
              <li className='text-white'>
                <Link to="/myartifactpage">My Artifacts Page</Link>
              </li>
                </ul>
              </details>
              
              <li className="mt-2">
                <Link
                  to="/"
                  onClick={logOut}
                  className="block border rounded-lg border-white text-center"
                >
                  Logout
                </Link>
              </li>
            </ul>

        </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
