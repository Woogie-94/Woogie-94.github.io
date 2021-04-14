import React from "react";
import Calendar from "./components/calendar/Calendar";
import { ThemeProvider } from "styled-components";
import thema from "./thema";

function App() {
  return (
    <ThemeProvider theme={thema}>
      <Calendar />
    </ThemeProvider>
  );
}

export default App;
