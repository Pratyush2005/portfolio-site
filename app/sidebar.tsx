// app/Sidebar.tsx
"use client"; // Add this directive to specify that this is a client-side component

import { useEffect, useState } from "react";
import "./app.css";
import { sidebarData } from "./sidebardata"; // Import sidebar data

export default function Sidebar() {
  const [currentPath, setCurrentPath] = useState<string>("");

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const handleNavigation = (path: string) => {
    window.location.href = path; // Forces a full page reload
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