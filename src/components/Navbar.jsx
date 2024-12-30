import React, { useState, useEffect } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import icon from "../images/brilliantlogo.png";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    // Set initial menu visibility based on screen size
    if (screenSize < 768) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/">Cryptoverse</Link>
        </Typography.Title>
        <Button
          className="menu-control-container"
          onClick={() => setActiveMenu((prev) => !prev)}
        >
          <MenuOutlined />
        </Button>
      </div>

      {activeMenu && (
        <Menu theme="dark">
          <Menu.Item icon={<HomeOutlined />} key="home">
            <Link
              to="/"
              onClick={() => screenSize < 768 && setActiveMenu(false)}
            >
              Home
            </Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />} key="cryptocurrencies">
            <Link
              to="/cryptocurrencies"
              onClick={() => screenSize < 768 && setActiveMenu(false)}
            >
              Cryptocurrencies
            </Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined />} key="exchanges">
            <Link
              to="/exchanges"
              onClick={() => screenSize < 768 && setActiveMenu(false)}
            >
              Exchanges
            </Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />} key="news">
            <Link
              to="/news"
              onClick={() => screenSize < 768 && setActiveMenu(false)}
            >
              News
            </Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};

export default Navbar;
