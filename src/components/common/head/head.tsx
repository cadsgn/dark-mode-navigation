import React from "react";
import { Helmet } from "react-helmet";

const Head = () => (
  <Helmet>
    <link
      rel='preload'
      href='/static/montserrat-400-b07bcc994632839adaff56a67b143cf1.woff2'
      as='font'
      type='font/woff2'
      crossOrigin=''
    />
    <link
      rel='preconnect'
      href='/static/orelega-one-400-5efc1ecdd5b7886c11e0ec9bdaeae7ff.woff2'
    />
    <link
      rel='preload'
      href='/static/montserrat-400-b07bcc994632839adaff56a67b143cf1.woff2'
      as='font'
      type='font/woff2'
      crossOrigin=''
    />
    <link
      rel='preconnect'
      href='/static/orelega-one-400-5efc1ecdd5b7886c11e0ec9bdaeae7ff.woff2'
    />
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
