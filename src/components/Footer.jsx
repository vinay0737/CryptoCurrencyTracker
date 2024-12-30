import React from "react";
import { Typography, Space } from "antd";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const footerYear = new Date().getFullYear();
  return (
    <footer
      className="footer"
      style={{
        backgroundColor: "#001529",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <Typography.Title
        level={5}
        style={{ color: "white", marginBottom: "10px" }}
      >
        &copy; {footerYear} Vekkuluri Vinay. CryptoVerse
      </Typography.Title>
      <Space size="large">
        <a
          href="https://www.linkedin.com/in/vekkuluri-vinay-43966328b/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white", fontSize: "20px" }}
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://www.instagram.com/vinay_07_25/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "white", fontSize: "20px" }}
          aria-label="Instagram Profile"
        >
          <FaInstagram />
        </a>
      </Space>
    </footer>
  );
};

export default Footer;
