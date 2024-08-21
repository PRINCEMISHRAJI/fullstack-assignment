import React, { useState, useEffect } from 'react';
import './App.css'
import Card from './Component/Card';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import axios from 'axios';
import debounce from 'lodash.debounce'

function App() {
  const [query, setQuery] = useState('');
  const [filteredCards, setFilteredCards] = useState([]);
  const [loading, setLoading] = useState(true);

  const apiUrl = import.meta.env.VITE_API_URL;
  useEffect(() => {
    // Fetching card data from my backend API
    setLoading(true);
    try {
      fetch(`${apiUrl}/cards/`)
          .then(res => res.json())
          .then(data => {
            setFilteredCards(data);
          })
          
        } catch (error) {
          console.error('Error fetching card data:', error);
          
        }finally{
          setLoading(false)};
  }, []);

  const handleKeyDown = (e)=>{
    if(e.key === 'Enter'){
      handleSearch();
    }
  }

  const handleSearch = async () => {
    try {
      const response = await axios(`${apiUrl}/cards/${query}`);
      const data = response.data
      Array.isArray(data) ? setFilteredCards(data) : setFilteredCards([data]);
    } catch (error) {
      setFilteredCards([]);
      console.log("Your Query doesn't match any result", error);

    }
  }

  const debouncedSearch = debounce(() => handleSearch(), 300);

  return (
    <div className="help-center">
      <Header />
      <main>
        <div className="bg">
          <div className="search-bar">
            <div id='name'>How can we help?</div>
            <div className="search-input">
              <div className='search-container'>
                <input
                  type="text"
                  placeholder='Search'
                  value={query}
                  onChange={(e) => setQuery(e.target.value)} 
                  onKeyDown={handleKeyDown}  
                />
                <div className="icon" onClick={() => debouncedSearch()}>
                  <i className="bi bi-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Card 
          cards={filteredCards}
          loading={loading} 
        />
      </main>
      <Footer />
    </div>
  );
}

export default App
