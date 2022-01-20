import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SnackbarProvider } from "notistack";

// Styles
import GlobalStyle from "./styles/GlobalStyle";

// Pages
import Home from "./pages/Home";
import CycleElimination from "./pages/CycleElimination";
import CycleEliminationVisualize from "./pages/CycleEliminationVisualize";

// Components
import Header from "./components/Header";

const App = (props) => {
  const contentContainerStyle = {
    // minHeight: "calc(100vh - 64px)",
    // backgroundColor: "white",
    marginTop: "64px",
  };

  return (
    // snackbar to show alerts
    <SnackbarProvider maxSnack={1} autoHideDuration={1000}>
      <Router>
        <div className="App">
          <GlobalStyle />
          <Header />

          <div style={contentContainerStyle}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cycle-elimination" element={<CycleElimination />} />
              <Route
                path="/cycle-elimination-visualize"
                element={<CycleEliminationVisualize />}
              />
            </Routes>
          </div>
        </div>
      </Router>
    </SnackbarProvider>
  );
};

export default App;
