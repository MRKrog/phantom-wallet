import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Box } from '@mui/material'
import { theme } from './theme'
import HomePage from './pages/HomePage'
import SwapPage from './pages/SwapPage'
import HistoryPage from './pages/HistoryPage'
import SearchPage from './pages/SearchPage'
import BottomNavigation from './components/BottomNavigation'

function CryptoWalletApp() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />
      case 'swap':
        return <SwapPage />
      case 'history':
        return <HistoryPage />
      case 'search':
        return <SearchPage />
      default:
        return <HomePage />
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
        minHeight: '100vh', 
        bgcolor: 'background.default',
        width: '100%',
        overflow: 'hidden', // Prevent any overflow issues
      }}>
        {renderPage()}
        <BottomNavigation 
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </Box>
    </ThemeProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CryptoWalletApp />
  </React.StrictMode>
) 