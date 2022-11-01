import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './screens/About';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
