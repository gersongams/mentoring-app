import React from "react";
import Header from "../Header";
import Siderbar from "../Sidebar";
import { Content, LayoutStyled } from "./style";

const MainLayout = ({ children }) => {
  return (
    <LayoutStyled>
      <Siderbar />
      <Content>
        <Header style={{ padding: 0 }} />
        <div style={{ padding: '10rem 2rem 2rem 2rem', background: 'gray', height: '100vh' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360, background: 'white', height: '100%' }}>
            {children}
          </div>
        </div>
      </Content>
    </LayoutStyled>
  );
};

export default MainLayout;
