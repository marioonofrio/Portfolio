import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <main style={{ flex: 1 }}>
              {/* Add your main content here */}
          </main>
          <Footer />
      </div>
  );
}

export default App;