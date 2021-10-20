import React from "react";
import Head from "./head";

interface IOwnProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IOwnProps) => {
  return (
    <>
      <Head />
      <div>{children}</div>
    </>
  );
};
export default Layout;
