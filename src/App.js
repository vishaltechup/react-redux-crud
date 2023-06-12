import Home from "./Home";
import TableDemo from "./TableDemo";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Create from "./Create";
import Update from "./Update";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/create" element={<Create/>} ></Route>
        <Route path="/update/:id" element={<Update/>} />
      </Routes>
    </BrowserRouter>
      // <Home/>
      // <TableDemo/>
  );
}

export default App;
