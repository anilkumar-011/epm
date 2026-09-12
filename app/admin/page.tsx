"use client";
import { getCookie } from "cookies-next";
import Link from "next/link";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Home } from "./home";
import AboutUS from "./aboutus";

export default function AdminPage() {
  const [component, setComponent] = useState<React.ReactNode>(<Home />);

  useEffect(() => {
    if (!getCookie("is_super_user")) {
      redirect("/login");
    }
  }, []);

  interface INavLink {
    label: string;
    component: React.ReactNode;
  }

  const Sidebar: React.FC = () => {
    const navLinks: INavLink[] = [
      { label: "Home", component: <Home /> },
      { label: "About Us", component: <AboutUS /> },
    ];
    return (
      <nav className=" bg-third  rounded-xl text-center p-2 max-h-96 md:max-h-screen md:w-64 overflow-y-auto transition duration-300 ease-in-out z-50">
        <Link href="/" className="text-xl font-bold px-4 py-2 block">
          Your Admin Panel
        </Link>
        <ul className="flex flex-col space-y-4 px-4 py-4">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button onClick={() => setComponent(link.component)}>
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  };

  return (
    <div className=" m-3 ">
      <p className=" font-medium text-center text-4xl">Welcome to Admin Page</p>
      <div className=" md:flex md:space-x-5">
        <Sidebar />
        {component}
      </div>
    </div>
  );
}
