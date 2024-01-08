import "./SideNavbar.css";
import logo from "../../assets/logo.svg";

export default function SideNavbar({open, setOpen}) {
  return (    
    <nav className="sidenav-mobile">
      <div className="navbar-wrapper">
        <div>
          <img src={logo} className="logo" />
        </div>

        <button onClick={() => {setOpen(true)}}>
          <svg width="40" height="17" xmlns="http://www.w3.org/2000/svg">
            <g fill="#00001A" fill-rule="evenodd">
              <path d="M0 0h40v3H0zM0 7h40v3H0zM0 14h40v3H0z" />
              <path d="M0 0h40v3H0z" />
            </g>
          </svg>
        </button>
      </div>

      <div className={`sidenav-wrapper ${open ? 'active' : ''}`}>
        <button onClick={() => {setOpen(false)}}>
          <svg width="32" height="31" xmlns="http://www.w3.org/2000/svg">
            <g fill="#00001A" fill-rule="evenodd">
              <path d="m2.919.297 28.284 28.284-2.122 2.122L.797 2.419z" />
              <path d="M.797 28.581 29.081.297l2.122 2.122L2.919 30.703z" />
            </g>
          </svg>
        </button>

        <div className="sidenav-links">
          <a href="#">Home</a>
          <a href="#">New</a>
          <a href="#">Popular</a>
          <a href="#">Trending</a>
          <a href="#">Categories</a>
        </div>
      </div>

      <div className={`${open ? 'sidenav-overlay' : 'sidenav-overlay-hide'}`}></div>
    </nav>
  );
}
