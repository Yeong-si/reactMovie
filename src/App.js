import Detail from "./routes/Detail";
import Home from "./routes/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/movie/:id" element={<Detail/>}>
        </Route>
        <Route path="/" element={<Home/>}>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
