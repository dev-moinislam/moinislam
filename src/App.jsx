import './App.css'
import Header from './components/header/Header'
import { useLocation } from 'react-router-dom'
import React, { useEffect } from 'react';
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import { Box,keyframes } from '@mui/material';

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.2); opacity: 1; }
  100% { transform: scale(1); opacity: 0.5; }
`;


function App() {
  
  const location = useLocation();

  // Scroll to the top when the location changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Header/>
      <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        background: 'radial-gradient(circle at top left, #0f172a, #0a0f1c)',
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Glowing orbs */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, #00ffff99, transparent)',
          filter: 'blur(80px)',
          animation: `${pulse} 6s ease-in-out infinite`,
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, #ff00ff99, transparent)',
          filter: 'blur(80px)',
          animation: `${pulse} 7s ease-in-out infinite`,
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '60%',
          width: 250,
          height: 250,
          borderRadius: '50%',
          background: 'radial-gradient(circle, #00ff8899, transparent)',
          filter: 'blur(80px)',
          animation: `${pulse} 8s ease-in-out infinite`,
          zIndex: 0,
        }}
      />

      {/* Content */}
      <Box>
        <Home />
        <Portfolio />
        <Contact />
      </Box>
    </Box>
    </>
  )
}

export default App
