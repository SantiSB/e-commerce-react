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
import { styled, useTheme } from '@mui/material/styles'
import MainLogo from '../assets/MainLogo'
import InstagramIcon from '../assets/icons/social/InstagramIcon'
import LinkedInIcon from '../assets/icons/social/LinkedInIcon'
import FacebookIcon from '../assets/icons/social/FacebookIcon'
import MailIcon from '../assets/icons/MailIcon'
import PhoneIcon from '../assets/icons/PhoneIcon'
import LocationIcon from '../assets/icons/LocationIcon'

interface OrderProps {
  order: {
    xs?: number
    sm?: number
    md?: number
    lg?: number
    xl?: number
  }
}

// Styled components
const FooterBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.primary.main,
  padding: theme.spacing(6, 0),
}))

const SocialMediaBox = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
})

const ContactInfoBox = styled(Box)({
  display: 'flex',
  alignItems: 'flex-end',
  gap: '8px',
})

// Styled Grid component to apply order for responsive design
const OrderedGrid = styled(Grid)<OrderProps>(({ theme, order }) => ({
  [theme.breakpoints.up('xs')]: {
    order: order?.xs ?? 0,
  },
  [theme.breakpoints.up('md')]: {
    order: order?.md ?? 0,
  },
}))

const Footer: React.FC = () => {
  const theme = useTheme()
  return (
    <FooterBox component="footer">
      <Container maxWidth="lg">
        <Grid container alignItems="flex-start" spacing={5}>
          <OrderedGrid
            item
            xs={6}
            sm={6}
            md={3}
            lg={3}
            order={{ xs: 1, md: 1 }}
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
          </OrderedGrid>

          <OrderedGrid
            item
            xs={6}
            sm={6}
            md={3}
            lg={3}
            order={{ xs: 2, md: 4 }}
          >
            <SocialMediaBox>
              <IconButton>
                <FacebookIcon color={theme.palette.primary.main} />
              </IconButton>
              <IconButton>
                <InstagramIcon color={theme.palette.primary.main}/>
              </IconButton>
              <IconButton>
                <LinkedInIcon color={theme.palette.primary.main}/>
              </IconButton>
            </SocialMediaBox>
          </OrderedGrid>

          <OrderedGrid
            item
            xs={12}
            sm={6}
            md={3}
            lg={3}
            order={{ xs: 3, sm: 3, md: 2 }}
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
          </OrderedGrid>

          <OrderedGrid
            item
            xs={12}
            sm={6}
            md={3}
            lg={3}
            order={{ xs: 4, sm: 2, md: 3 }}
          >
            <Typography variant="h6" gutterBottom>
              Contacto
            </Typography>

            <ContactInfoBox>
              <MailIcon />
              <Typography variant="body2">ecommercs@gmail.com</Typography>
            </ContactInfoBox>
            <ContactInfoBox>
              <PhoneIcon />
              <Typography variant="body2">+57 3542564875</Typography>
            </ContactInfoBox>
            <ContactInfoBox>
              <LocationIcon />
              <Typography variant="body2">
                Carrera 34 #53-45 Pasto, Colombia
              </Typography>
            </ContactInfoBox>
          </OrderedGrid>
        </Grid>
        <Divider sx={{ my: 6 }} />
        <Typography variant="body2" align="center">
          © 2023 Flowbite™. All Rights Reserved.
        </Typography>
      </Container>
    </FooterBox>
  )
}

export default Footer
