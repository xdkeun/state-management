import { useState } from "react";
import ThemeContext from "./context/ThemeContext";
import UserContext from "./context/UserContext";
import Page from "./components/Page";
function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <UserContext.Provider value={"홍길동"}>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Page />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
