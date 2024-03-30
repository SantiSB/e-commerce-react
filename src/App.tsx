import { useState } from 'react'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { Theme } from '@mui/material/styles'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './layout/Layout'
import NotFound from './pages/NotFound'
import lightTheme from './theme/lightTheme'
import darkTheme from './theme/darkTheme'

function App() {
  const [theme, setTheme] = useState<Theme>(lightTheme)

  const toggleTheme = () => {
    setTheme(theme.palette.mode === 'light' ? darkTheme : lightTheme)
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <HashRouter>
        <Layout
          toggleTheme={toggleTheme}
          isDarkMode={theme.palette.mode === 'dark'}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </HashRouter>
    </ThemeProvider>
  )
}

export default App
