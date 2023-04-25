import Bookmark from "./components/bookmark";
import SearchPhoto from "./components/searchimage";
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SearchPhoto/>} />
          <Route path="/bookmark" element={<Bookmark/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
