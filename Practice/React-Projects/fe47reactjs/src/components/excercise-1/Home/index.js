import React from "react";
import Header from "../Header";
import { Content } from "../Content";
import { Sidebar } from "../Sidebar";
import { Footer } from "../Footer";
import "./style.css";
export function Home() {
  // fuct componant return về 1 đoạn html trả về giao diện
  return (
    <div>
      <Header></Header>
      <div className="container">
        <Content></Content>
        <Sidebar></Sidebar>
      </div>

      <Footer></Footer>
    </div>
  );
}
