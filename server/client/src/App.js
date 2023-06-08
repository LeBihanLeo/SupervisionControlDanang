import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Home() {
  return (
      <div style={{ padding: 20 }}>
        <h2>Home View</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
      </div>
  );
}
function About() {
  return (
      <div style={{ padding: 20 }}>
        <h2>About View</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adip.</p>
      </div>
  );
}

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
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
  );
}

export default App;