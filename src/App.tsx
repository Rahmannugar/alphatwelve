import { useEffect, useState } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem("mode");
    return savedMode ? JSON.parse(savedMode) : true;
  });

  const theme = createTheme({
    palette: {
      mode: mode ? "light" : "dark",
      background: {
        default: mode ? "rgba(252, 247, 255, 1)" : "rgba(56, 53, 68, 1)",
      },
    },
  });

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(mode));
  }, [mode]);

  const toggleMode = () => {
    setMode((prevMode: any) => !prevMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="md:flex">
        <Sidebar />
        <Header />
      </div>
    </ThemeProvider>
  );
};

export default App;
