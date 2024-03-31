import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
  toggleTheme: () => void
  isDarkMode: boolean
}

const Layout = ({ children, toggleTheme, isDarkMode }: LayoutProps) => {
  return (
    <>
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      {/* Contenedor o margen superior para evitar que el contenido se solape con el AppBar */}
      <div style={{ marginTop: 64, width: '100%' }}>{children}</div>
      <Footer/>
    </>
  )
}

export default Layout
