import { Link } from "react-router";
import { type SidebarProps } from "../libs/Sidebar";

export default function Sidebar({ userName, type }: SidebarProps) {
  return (
    <aside
      className="d-flex align-items-start flex-column p-4 bg-primary min-vh-100"
      style={{ width: "auto", height: "100%", overflowY: "auto" }}
      data-bs-theme="dark"
    >
      <div className="flex-grow-1">
        <nav className="navbar align-items-start flex-column">
          <h3 className="navbar-brand">Todo List App</h3>
          <ul className="navbar-nav w-100">
            <li className="nav-item">
              <Link className="nav-link active d-flex align-items-center gap-2" aria-current="page" to={"/"}>
                {/* SVG ไอคอนรูปบ้าน (ขนาดเดิม 18x18) */}
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z"/>
                </svg>
                <span className="d-md-inline">Home</span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle d-flex align-items-center gap-2"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {/* SVG ไอคอนรูปกล่อง (ปรับขนาดใหญ่ขึ้นเป็น 24x24 แล้ว!) */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"/>
                  <path d="M3 6.5h10v6a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 3 12.5v-6zm5 5.5c2.5-2.5 3.5-3.5 3.5-4.5 0-1-.8-1.5-1.5-1.5a1.5 1.5 0 0 0-2 1c-.3-.7-1-1-2-1-.7 0-1.5.5-1.5 1.5 0 1 1 2 3.5 4.5z"/>
                </svg>
                <span className="d-md-inline">MY Stuffs</span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to={"/my/todolistpage"}>
                    <span className="d-md-inline px-2">TodolistPage</span>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <p className="text-white">
          {userName} : {type}
        </p>
      </div>
    </aside>
  );
}