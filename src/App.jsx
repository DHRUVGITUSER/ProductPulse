import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import ItemGrid from './components/ItemGrid';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';

function App() {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = 'https://fakestoreapi.com/products';

  const fetchItems = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(API_URL);
      setItems(response.data);
    } catch (err) {
      setError(err.message || 'Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // Optimize with useMemo to prevent unnecessary recalculations
  const filteredItems = useMemo(() => {
    if (!searchTerm.trim()) {
      return items;
    }

    const searchLower = searchTerm.toLowerCase().trim();
    return items.filter(item =>
      item.title.toLowerCase().includes(searchLower) ||
      item.description.toLowerCase().includes(searchLower) ||
      item.category.toLowerCase().includes(searchLower)
    );
  }, [searchTerm, items]);

  return (
    <div className="app-container">
      <Header />

      <main className="main-content">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <div className="section-wrapper">
          {!loading && !error && (
            <p className="results-info">
              Showing <span>{filteredItems.length}</span> products
            </p>
          )}

          {loading && <Loader />}
          {error && <ErrorMessage message={error} onRetry={fetchItems} />}
          {!loading && !error && <ItemGrid items={filteredItems} />}
        </div>
      </main>

      <footer className="footer">
        © 2024 ProductPulse • Built with React
      </footer>
    </div>
  );
}

export default App;