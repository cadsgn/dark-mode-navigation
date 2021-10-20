import React from "react";
import { Title, Link, Meta } from "react-head";

const Head = () => (
  <>
    <Title>Carlos Alvarez | UX/UI Developer</Title>
    <meta
      name='description'
      content='Carlos Alvarez design web page. Ux Ui and frontend developer'
    />
    {/* <meta name='robots' content={getRobots()} /> */}
    <meta name='viewport' content='width=device-width, user-scalable=no' />
    {/* <meta name='theme-color' content='#d2312e' /> */}
    <meta name='author' content='Carlos Alvarez Design' />
    <Link
      rel='preload'
      href='/fonts/montserrat/montserrat-300.woff2'
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
    />
    <Link
      rel='preload'
      href='/fonts/montserrat/montserrat-400.woff2'
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
    />
    <Link
      rel='preload'
      href='/fonts/montserrat/montserrat-600.woff2'
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
    />
    <Link
      rel='preload'
      href='/fonts/orelega-one/orelega-one-400.woff2'
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
    />
  </>
);

export default Head;
