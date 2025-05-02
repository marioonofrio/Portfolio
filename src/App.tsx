import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
    return (
        <Router>
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Header />
                <main style={{ flex: 1 }}>
                    <Routes>
                        <Route path="/" element={<Home />} /> {/* Home page */}
                        <Route path="/about" element={<About />} /> {/* About page */}
                        <Route path = "/projects" element={<Projects />} /> {/* Projects page */}
                        <Route path="/contact" element={<Contact />} /> {/* Contact page */}
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;