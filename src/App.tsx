import { useEffect, useState } from "react";
import { ThemeProvider, createTheme, CssBaseline, Button } from "@mui/material";

const App = () => {
  const [mode, setMode] = useState(() => {
    const savedMode = localStorage.getItem("mode");
    return savedMode ? JSON.parse(savedMode) : true;
  });

  const theme = createTheme({
    palette: {
      mode: mode ? "light" : "dark",
      background: {
        default: mode ? "rgba(252, 247, 255, 1)" : "rgba(72, 69, 84, 1)",
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
      <div style={{ padding: "20px" }}>
        <h1>Welcome to AlphaTwelve</h1>
        <Button variant="contained" color="primary" onClick={toggleMode}>
          Toggle Theme
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default App;
