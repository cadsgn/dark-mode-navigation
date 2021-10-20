import React from "react";
import { Title, Link, Meta } from "react-head";
import Montserrat300Woff2 from "../../../static/fonts/montserrat/montserrat-300.woff2";
import Montserrat400Woff2 from "../../../static/fonts/montserrat/montserrat-400.woff2";
import Montserrat600Woff2 from "../../../static/fonts/montserrat/montserrat-600.woff2";
import OrelegaOne400Woff2 from "../../../static/fonts/orelega-one/orelega-one-400.woff2";

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
      href={Montserrat300Woff2}
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
    />
    <Link
      rel='preload'
      href={Montserrat400Woff2}
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
    />
    <Link
      rel='preload'
      href={Montserrat600Woff2}
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
    />
    <Link
      rel='preload'
      href={OrelegaOne400Woff2}
      as='font'
      type='font/woff2'
      crossOrigin='anonymous'
    />
  </>
);

export default Head;
