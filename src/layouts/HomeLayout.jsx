import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";

function HomeLayout() {
  return (
    <>
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto my-3">
            <LatestNews></LatestNews>
        </section>
        <nav>
            <Navbar></Navbar>
        </nav>
      </header>
      <main></main>
      <section className="left-nav"></section>
      <section className="main">
        <Outlet></Outlet>
      </section>
      <section className="right-nav"></section>
    </>
  );
}

export default HomeLayout;
