import React from 'react'
import Data from '../components/Home/Data'
import { Box } from '@mui/material'

const Home = () => {
  return (
      <Box id="home" sx={{mt:{xs:8}}} >
        <Data/>
      </Box>
  )
}

export default Home