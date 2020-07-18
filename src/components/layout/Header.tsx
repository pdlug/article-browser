import React from "react";

const Header = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <header className="bg-blue-600 text-white py-3 pl-4 shadow-md">
    <h1 className="text-2xl font-bold">{children}</h1>
  </header>
);

export default Header;
