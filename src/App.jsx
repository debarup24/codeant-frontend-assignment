import { BrowserRouter, Route, Routes } from "react-router-dom";
import SigninPageMount from "./page_mount/SigninPageMount";
import RepositoryPageMount from "./page_mount/RepositoryPageMount";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/repository"} Component={RepositoryPageMount} />
          <Route path={"/"} Component={SigninPageMount} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
