import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Auth } from "./auth";
import { ApiProvider } from "./context/api";
import { LocalProvider, useLocal } from "./context/local";
import { MyRoutes } from "./routes";
import { GlobalStyle } from "./styles/globals";

function App() {
  return (
    <LocalProvider>
      <App2 />
    </LocalProvider>
  );
}
export default App;

const App2 = () => {
  const { theme } = useLocal();
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ApiProvider>
          <Auth />
          <MyRoutes />
        </ApiProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
};
