import React from "react";
import { Title, Meta } from "react-head";
import Montserrat300Woff2 from "../../../static/fonts/montserrat/montserrat-300.woff2";
import Montserrat400Woff2 from "../../../static/fonts/montserrat/montserrat-400.woff2";
import Montserrat600Woff2 from "../../../static/fonts/montserrat/montserrat-600.woff2";
import OrelegaOne400Woff2 from "../../../static/fonts/orelega-one/orelega-one-400.woff2";

const Head = () => (
  <>
    <Title>Carlos Alvarez | UX/UI Developer</Title>
    <Meta
      name='description'
      content='Carlos Alvarez design web page. Ux Ui and frontend developer'
    />
    <Meta name='author' content='Carlos Alvarez Design' />
    {/* <Meta name='robots' content={getRobots()} /> */}
    {/* <Meta name='theme-color' content='#d2312e' /> */}
  </>
);

export default Head;
