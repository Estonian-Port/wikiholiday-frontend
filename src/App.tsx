import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { CountryDashboard } from './pages/CountryDashboard';
import { Creadores } from './pages/Creadores';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pais/:countryId" element={<CountryDashboard />} />
        <Route path="/creadores" element={<Creadores />} />
      </Routes>
    </Layout>
  );
}

export default App;
