import Container from "@mui/material/Container";

import { Header } from "./components";
import { Home,  Registration } from "./pages";

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Home />
       
        <Registration />
      </Container>
    </>
  );
}

export default App;
