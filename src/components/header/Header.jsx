import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-scroll';
import { Grid } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';

const pages = [
    { label: 'Home', path: 'home', icon: <HomeOutlinedIcon />, offset: -50 },
    { label: 'Portfolio', path: 'portfolio', icon: <BrokenImageOutlinedIcon />, offset: -80 },
    { label: 'Contact', path: 'contact', icon: <NearMeOutlinedIcon />, offset: -90 },
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [activeItem, setActiveItem] = React.useState('home');

    const handleOpenNavMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMenuItemClick = (path) => {
        setActiveItem(path);
        setIsMenuOpen(false);
    };

    const iconPulse = {
        '@keyframes iconPulse': {
          '0%': {
            transform: 'scale(1)',
            boxShadow: '0 0 8px rgba(0, 102, 204, 0.4)',
          },
          '50%': {
            transform: 'scale(1.1)',
            boxShadow: '0 0 20px rgba(0, 102, 204, 0.8)',
          },
          '100%': {
            transform: 'scale(1)',
            boxShadow: '0 0 8px rgba(0, 102, 204, 0.4)',
          },
        },
      };
      

    return (
        <React.Fragment>
            <CssBaseline />
            {/* Desktop and Tablet */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex', md: 'flex' } }}>
                <AppBar
                    position="fixed"
                    sx={{
                        background: 'rgba(20, 20, 20, 0.55)',
                        borderRadius: '0 0 20px 20px',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                        // marginTop: '10px',
                        mx: 'auto',
                        maxWidth: '100%',
                        // border: '1px solid rgba(168, 85, 247, 0.3)', 
                        boxShadow: '0 0 12px rgba(0, 102, 204, 0.25), 0 0 30px rgba(0, 102, 204, 0.1)', // outer glow
                        transition: 'all 0.3s ease-in-out',
                      }}
                >
                    <Container maxWidth="xl">
                        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            {/* Logo Image */}
                            <Box
                                component="img"
                                src="https://i.imghippo.com/files/eKNT2038e.png"
                                alt="DevMoin Logo"
                                sx={{
                                    height: 40,
                                    ml: 2,
                                    cursor: 'pointer'
                                }}
                            />

                            <Box sx={{ display: 'flex', gap: 2 }}>
                                {pages.map((page, index) => (
                                    <Link
                                        to={page.path}
                                        spy={true}
                                        smooth={true}
                                        offset={page.offset}
                                        duration={500}
                                        onSetActive={() => handleMenuItemClick(page.path)}
                                        key={index}
                                    >
                                        <Button
                                            sx={{
                                                fontFamily: 'Poppins',
                                                fontWeight: 400,
                                                textTransform: 'none',
                                                fontSize: '14px',
                                                color: activeItem === page.path ? '#a855f7' : '#fff',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                  color: '#a855f7',
                                                  textShadow: '0 0 8px rgba(168, 85, 247, 0.7)',
                                                },
                                              }}
                                        >
                                            {page.label}
                                        </Button>
                                    </Link>
                                ))}
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Box>

            {/* Mobile Bottom Nav */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none', md: 'none' } }}>
                <AppBar
                    position="fixed"
                    sx={{
                        top: 'auto',
                        bottom: isMenuOpen ? 0 : -65,
                        transition: 'bottom 0.3s',
                        background: 'rgba(10, 10, 10, 0.65)',
                        borderRadius: '20px 20px 0 0',
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                        border: '1px solid rgba(168, 85, 247, 0.3)', 
                        boxShadow: '0 0 12px rgba(168, 85, 247, 0.3), 0 0 30px rgba(168, 85, 247, 0.1)',
                    }}
                >
                    <Toolbar>
                        <Box
                            component="img"
                            src="https://i.imghippo.com/files/eKNT2038e.png"
                            alt="DevMoin"
                            sx={{ height: 35, mr: 2 }}
                        />
                        <Box sx={{ flexGrow: 1 }} />
                        <IconButton
                            size="large"
                            onClick={handleOpenNavMenu}
                            sx={{
                                ...iconPulse,
                                animation: 'iconPulse 2s infinite ease-in-out',
                                borderRadius: '50%',
                                backgroundColor: 'rgba(0, 102, 204, 0.1)',
                                color: '#0066cc',
                                padding: '8px',
                                transition: 'transform 0.3s',
                                '&:hover': {
                                transform: 'scale(1.15)',
                                backgroundColor: 'rgba(0, 102, 204, 0.2)',
                                },
                            }}
                            >
                            <FingerprintIcon fontSize="medium" />
                        </IconButton>

                    </Toolbar>

                    <Box sx={{ mb: '10px', ml: '30px' }}>
                        <Grid container rowSpacing={1} columnSpacing={1}>
                            {pages.map((page, index) => (
                                <Grid item xs={4} key={index}>
                                    <Link
                                        to={page.path}
                                        spy={true}
                                        smooth={true}
                                        offset={page.offset}
                                        duration={500}
                                        onSetActive={() => handleMenuItemClick(page.path)}
                                    >
                                        <Button
                                            sx={{
                                                fontFamily: 'Poppins',
                                                fontWeight: 400,
                                                textTransform: 'none',
                                                fontSize: '14px',
                                                color: activeItem === page.path ? '#a855f7' : '#fff',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                '&:hover': {
                                                    color: '#a855f7',
                                                    textShadow: '0 0 8px rgba(168, 85, 247, 0.5)',
                                                }
                                            }}
                                        >
                                            {page.icon}
                                            {page.label}
                                        </Button>
                                    </Link>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </AppBar>
            </Box>
        </React.Fragment>
    );
};

export default Header;
