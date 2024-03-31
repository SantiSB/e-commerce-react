import * as React from 'react'
import {
  Box,
  Container,
  Grid,
  Typography,
  Divider,
  IconButton,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'
import MainLogo from '../assets/MainLogo'
import InstagramIcon from '../assets/icons/social/InstagramIcon'
import LinkedInIcon from '../assets/icons/social/LinkedInIcon'
import FacebookIcon from '../assets/icons/social/FacebookIcon'
import MailIcon from '../assets/icons/MailIcon'
import PhoneIcon from '../assets/icons/PhoneIcon'
import LocationIcon from '../assets/icons/LocationIcon'

const Footer: React.FC = () => {
  const theme = useTheme()

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: theme.palette.background.paper,
        color: theme.palette.primary.main,
        py: 6,
      }}
    >
      <Container maxWidth="lg">
        <Grid container alignItems="flex-start" spacing={5}>
          <Grid
            item
            xs={6}
            sm={6}
            md={3}
            lg={3}
            sx={{ order: { xs: 1, md: 1 } }}
          >
            <Link
              to="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
              <MainLogo height={40} />
            </Link>
          </Grid>

          <Grid
            item
            xs={6}
            sm={6}
            md={3}
            lg={3}
            sx={{
              order: { xs: 2, md: 4 },
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <Box>
              <IconButton>
                <FacebookIcon color={theme.palette.primary.main}/>
              </IconButton>
              <IconButton>
                <InstagramIcon color={theme.palette.primary.main}/>
              </IconButton>
              <IconButton>
                <LinkedInIcon color={theme.palette.primary.main}/>
              </IconButton>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            lg={3}
            sx={{ order: { xs: 3, sm: 3, md: 2 } }}
          >
            <Typography variant="h6" gutterBottom>
              Información
            </Typography>
            <Typography variant="body1" gutterBottom>
              Terminos y Condiciones
            </Typography>
            <Typography variant="body1" gutterBottom>
              Preguntas Frecuentes
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            md={3}
            lg={3}
            sx={{ order: { xs: 4, sm: 2, md: 3 } }}
          >
            <Typography variant="h6" gutterBottom>
              Contacto
            </Typography>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-end',
                gap: 1,
              }}
            >
              <MailIcon />
              <Typography variant="body2">ecommercs@gmail.com</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-end',
                gap: 1,
              }}
            >
              <PhoneIcon />
              <Typography variant="body2">+57 3542564875</Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-end',
                gap: 1,
              }}
            >
              <LocationIcon />
              <Typography variant="body2">
                Carrera 34 #53-45 Pasto, Colombia
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ my: 6 }} />
        <Typography variant="body2" align="center">
          © 2023 Flowbite™. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  )
}

export default Footer
