import React from 'react';
import {ChildProps} from "@/types";
import Navbar from "@/app/[lng]/(root)/_components/navbar";
const Layout = ({children}:ChildProps) => {
  return (
    <div>
      <Navbar/>
      <main>
        {children}
      </main>
    </div>
  );
};

export default Layout;