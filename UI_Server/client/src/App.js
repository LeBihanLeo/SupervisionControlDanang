import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import './App.css';


function NoMatch() {
  return (
      <div style={{ padding: 20 }}>
        <h2>404: Page Not Found</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
      </div>
  );
}

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="*" element={<NoMatch />} />
          <Route path="/Dashboard" element={<DashboardView />} />
        </Routes>
      </Router>
  );
}

export default App;