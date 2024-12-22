import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../AuthProvider/AuthProvider'
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
 const pathName = <>
<li><NavLink to='/'>Home</NavLink></li>
<li><NavLink to='/allArtifacts'>All Artifacts</NavLink></li>
<li><NavLink to='/AddArtifacts'>Add Artifacts</NavLink></li>

 </>

  return (
    <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {pathName}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Global art history</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {pathName}
    </ul>
  </div>
  <div className="navbar-end">
  {!user && (
    <Link to="/login" className=" border-b-2">Login</Link>
    )}

    {user && (
          <div className='dropdown dropdown-end z-50'>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar'
            >
              <div title={user?.displayName} className='w-10 rounded-full'>
                <img
                  referrerPolicy='no-referrer'
                  alt='User Profile Photo'
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
            >
              <div>
              <img src={user.photoURL} className='w-10 h-10 mx-auto rounded-full' alt="" />
              <p className='my-2'>{user.displayName}</p>
              <p className='my-2'>{user.email}</p>
              </div>
              
              <li>
                <Link to='/likedArtifacts'>Liked Artifacts Page</Link>
              </li>
              <li>
                <Link to='/myartifactpage'>My Artifacts Page</Link>
              </li>
              <li className='mt-2'>
                <Link to="/"
                  onClick={logOut}
                  className='bg-gray-200 block text-center'
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
