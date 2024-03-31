import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  FormControl,
  Input,
  InputAdornment,
} from '@mui/material'
import { styled, useTheme } from '@mui/material/styles'
import { Link } from 'react-router-dom'
import DarkIcon from '../assets/icons/ui/DarkIcon'
import LightIcon from '../assets/icons/ui/LightIcon'
import SearchIcon from '../assets/icons/ui/SearchIcon'
import ShoppingCartIcon from '../assets/icons/ui/ShoppingCartIcon'
import MainLogo from '../assets/MainLogo'

interface LayoutProps {
  toggleTheme: () => void
}

const CustomAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.primary.main,
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

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  margin: theme.spacing(1),
  width: '25ch',
  '& .MuiInputBase-input': {
    color: theme.palette.primary.main,
  },
  '& .MuiInput-underline:before': {
    borderBottomColor: theme.palette.primary.dark,
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: theme.palette.primary.main,
  },
  '& .MuiInput-underline:hover:before': {
    borderBottomColor: theme.palette.primary.light,
  },
}))

const Header = ({ toggleTheme }: LayoutProps) => {
  const theme = useTheme()

  return (
    <CustomAppBar position="fixed">
      <CustomToolbar>
        <CustomLink to="/">
          <MainLogo height={40} />
        </CustomLink>
        <Box display="flex" alignItems="center">
          <StyledFormControl variant="standard">
            <Input
              id="search-input-header"
              type="text"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton aria-label="search icon">
                    <SearchIcon color={theme.palette.primary.main} />
                  </IconButton>
                </InputAdornment>
              }
            />
          </StyledFormControl>
          <CustomIconButton>
            <ShoppingCartIcon color={theme.palette.primary.main} />
          </CustomIconButton>
          <CustomIconButton onClick={toggleTheme}>
            {theme.palette.mode === 'dark' ? (
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
