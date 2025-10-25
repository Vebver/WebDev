import { useState, useEffect } from 'react';
import Header from "./Header.jsx";
import Body from './Body.jsx';
import SocialMedia from './SocialMedia.jsx';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    console.log('Fetching data from backend...');
    fetch('http://localhost:3001/api/hello')
      .then(response => {
        console.log('Response status:', response.status);
        return response.json();
      })
      .then(data => {
        console.log('Data received:', data);
        setMessage(data.message);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      <Header/>
      <Body/>
      <SocialMedia/>
      {/*<div style={{ textAlign: 'center', padding: '20px' }}>
        <h2>Backend Message: {message}</h2>
      </div>
      */}
    </>
  );
}

export default App;
