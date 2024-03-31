import { AppBar, Toolbar, IconButton, Box, Typography } from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'
import { Link } from 'react-router-dom'
import DarkIcon from '../assets/DarkIcon'
import LightIcon from '../assets/LightIcon'
import ShoppingCartIcon from '../assets/ShoppingCartIcon'
import MainLogo from '../assets/MainLogo'

interface LayoutProps {
  toggleTheme: () => void
  isDarkMode: boolean
}

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.primary.main
}))

const CustomToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

const CustomLink = styled(Link)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textDecoration: 'none',
  color: 'inherit',
  marginRight: '8px',
})

const CustomIconButton = styled(IconButton)({
  marginLeft: '8px',
})

const Header = ({ toggleTheme, isDarkMode }: LayoutProps) => {
  const theme = useTheme()

  return (
    <CustomAppBar position="fixed">
      <CustomToolbar>
        <CustomLink to="/">
          <MainLogo height={40} />
        </CustomLink>
        <Box display="flex" alignItems="center">
          <CustomLink to="/productos">
            <Typography
              variant="button"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              Productos
            </Typography>
          </CustomLink>
          <CustomIconButton>
            <ShoppingCartIcon
              color={
                isDarkMode
                  ? theme.palette.primary.main
                  : theme.palette.primary.main
              }
            />
          </CustomIconButton>
          <CustomIconButton onClick={toggleTheme}>
            {isDarkMode ? (
              <LightIcon color={theme.palette.primary.main} />
            ) : (
              <DarkIcon color={theme.palette.primary.main} />
            )}
          </CustomIconButton>
        </Box>
      </CustomToolbar>
    </CustomAppBar>
  )
}

export default Header
