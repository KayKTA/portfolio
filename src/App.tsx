import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/About';
import Navbar from './components/base/Navbar';
import DashboardPlayground from './pages/DashboardPlayground';

export default function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<AboutPage />} />
        <Route path="/tests" element={<DashboardPlayground />} /> */}
        {/* <Route path="/projects" element={<ProjectsPage />} /> */}
      </Routes>
    </>
  );
}
