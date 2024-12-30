import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import { Provider } from "react-redux";
import store from "./app/store";
import {
  Navbar,
  Exchanges,
  Homepage,
  Cryptocurrencies,
  CryptoDetails,
  News,
  Footer,
} from "./components";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <div className="app">
          <div className="navbar">
            <Navbar />
          </div>
          <div className="main">
            <Layout>
              <div className="routes">
                <Routes>
                  {/* Define the routes without using `exact` */}
                  <Route path="/" element={<Homepage />} />
                  <Route path="/exchanges" element={<Exchanges />} />
                  <Route
                    path="/cryptocurrencies"
                    element={<Cryptocurrencies />}
                  />
                  <Route path="/crypto/:coinId" element={<CryptoDetails />} />
                  <Route path="/news" element={<News />} />
                </Routes>
              </div>
            </Layout>

            <div className="footer">
              <Footer />
            </div>
          </div>
        </div>
      </Provider>
    </Router>
  );
};

export default App;
