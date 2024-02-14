import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopSearchBar from "./components/top-search-bar/TopSearchBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<TopSearchBar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
