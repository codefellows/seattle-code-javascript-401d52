import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import ThemeProvider from "./Context/theme";
import SettingsProvider from "./Context/Settings";
import { MantineProvider } from "@mantine/core";
import Home from "./Components/home";
import Settings from "./Components/Settings/";

function App() {
  return (
    <MantineProvider>
      <ThemeProvider>
        <SettingsProvider>
          <div className="App">
            <BrowserRouter>
              <ul className="Nav-header">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/settings">Settings</Link>
                </li>
              </ul>

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/settings" element={<Settings />} />
              </Routes>
            </BrowserRouter>
          </div>
        </SettingsProvider>
      </ThemeProvider>
    </MantineProvider>
  );
}

export default App;
