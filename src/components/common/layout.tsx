import React from "react";
import Head from "./head";
import ScrollButton from "./ScrollButton";

interface IOwnProps {
  children: React.ReactNode;
}

const Layout = ({ children }: IOwnProps) => {
  return (
    <>
      <Head />
      <div>{children}</div>
      <ScrollButton />
    </>
  );
};
export default Layout;
