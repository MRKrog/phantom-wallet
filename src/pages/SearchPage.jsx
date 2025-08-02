import React from 'react'
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent
} from '@mui/material'
import Header from '../components/Header'

const SearchPage = () => {
  return (
    <Box sx={{ pb: 7 }}>
      <Header />
      <Container maxWidth="sm" sx={{ py: 3 }}>
        <Typography variant="h5" sx={{ mb: 3 }}>
          Search Tokens
        </Typography>
        <Card>
          <CardContent>
            <Typography variant="body1">
              Search functionality coming soon...
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  )
}

export default SearchPage 