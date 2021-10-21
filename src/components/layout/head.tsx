import React from "react";
import { Helmet } from "react-helmet";

const Head = () => (
  <Helmet>
    <title>Carlos Alvarez | UX/UI Developer</title>
    <meta
      name='description'
      content='Carlos Alvarez design web page. Ux Ui and frontend developer'
    />
    <meta name='author' content='Carlos Alvarez Design' />
    {/* <meta name='robots' content={getRobots()} /> */}
    {/* <meta name='theme-color' content='#d2312e' /> */}
  </Helmet>
);

export default Head;
