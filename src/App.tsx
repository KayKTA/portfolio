import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Home />} />
        {/* <Route path="/about" element={<AboutPage />} />
        <Route path="/tests" element={<DashboardPlayground />} /> */}
        {/* <Route path="/projects" element={<Dashboard />} /> */}
      </Routes>
    </>
  );
}
