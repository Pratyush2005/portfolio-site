
"use client";

import { useEffect, useState } from "react";
import "./app.css";
import { sidebarData } from "./sidebardata";

export default function Sidebar() {
  const [currentPath, setCurrentPath] = useState<string>("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const handleNavigation = (path: string) => {
    window.location.href = path;
  };

  return (
    <div className="sidebar">
      <p className="headi">Pratyush's Portfolio</p>
      <div className="divider"></div>

      <ul className="sidebarlist">
        {sidebarData.map((val, key) => (
          <li
            className={`row ${currentPath === val.link ? "active" : ""}`}
            key={key}
            onClick={() => handleNavigation(val.link)}
          >
            <div className="icon">{val.icon}</div>
            <div className="title">{val.title}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}