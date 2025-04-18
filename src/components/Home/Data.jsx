import React from 'react';
import { Social } from './Social';
import { Avatar, Box, Button, CardContent, Grid, Typography } from '@mui/material';
import Typed from 'typed.js';
import NearMeOutlinedIcon from '@mui/icons-material/NearMeOutlined';
import { keyframes } from '@mui/system';

const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.4; }
  50% { transform: scale(1.1); opacity: 1; }
  100% { transform: scale(1); opacity: 0.4; }
`;

const Data = () => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        `<span style="color:#1e88e5; font-weight:600;">Web Developer</span>`,
        `<span style="color:#43a047; font-weight:600;">YouTube SEO Expert</span>`,
        `<span style="color:#e53935; font-weight:600;">Video Editor</span>`
      ],
      typeSpeed: 60,
      loop: true,
      loopCount: Infinity,
      backDelay: 700,
      backSpeed: 40,
      smartBackspace: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        minHeight: '100vh',
        background: 'radial-gradient(circle at top left, #0f172a, #0a0f1c)',
        px: 2,
      }}
    >
      {/* Glowing Orbs */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: 250,
          height: 250,
          borderRadius: '50%',
          background: 'radial-gradient(circle, #1e88e5aa, transparent)',
          filter: 'blur(80px)',
          zIndex: 0,
          animation: `${pulse} 8s ease-in-out infinite`,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '5%',
          right: '10%',
          width: 250,
          height: 250,
          borderRadius: '50%',
          background: 'radial-gradient(circle, #e53935aa, transparent)',
          filter: 'blur(90px)',
          zIndex: 0,
          animation: `${pulse} 10s ease-in-out infinite`,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '40%',
          right: '30%',
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: 'radial-gradient(circle, #43a047aa, transparent)',
          filter: 'blur(70px)',
          zIndex: 0,
          animation: `${pulse} 12s ease-in-out infinite`,
        }}
      />

      <Grid container spacing={2} sx={{ position: 'relative', zIndex: 1 }}>
        <Grid item xs={2}>
          <Social />
        </Grid>
        <Grid item xs={10}>
          <Box sx={{ flexGrow: 1,mt:{sm:6,md:0} }}>
            <Grid container spacing={3} sx={{ display: {sm:'flex',xs:"flex"}, flexWrap: {sm:'wrap-reverse',xs:"wrap-reverse"} }}>
              <Box
                sx={{
                  height:{xs:'100%',sm:'100%',md:"100vh"},
                  width: '100vw',
                  display: {sm:'flex',xs:"flex"},
                  flexDirection: 'row',
                  flexWrap:{sm:'wrap-reverse',xs:"wrap-reverse"},
                  justifyContent: 'center',
                  alignItems: 'center',
                  mt: 4,
                }}
              >
                <Box sx={{ maxWidth: '600px' }}>
                  <CardContent sx={{ letterSpacing: '.2rem', fontFamily: 'Poppins' }}>
                    <Typography
                      component="div"
                      variant="h3"
                      sx={{
                        letterSpacing: '.2rem',
                        fontFamily: 'Poppins',
                        fontWeight: { xs: '400', sm: '400', md: '600' },
                        color: '#ffffff',
                      }}
                    >
                      Moin Islam
                    </Typography>
                    <Typography variant="subtitle" component="div" sx={{ color: '#60a5fa' }}>
                      ----- <span ref={el} />
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: '1.15rem',
                        lineHeight: 1.9,
                        color: '#d1d5db',
                        mt: 3,
                        textAlign:'justify'
                      }}
                    >
                      I build{' '}
                      <Box component="span" sx={highlight}>
                        websites
                      </Box>{' '}
                      that feel like home, edit{' '}
                      <Box component="span" sx={highlight}>
                        stories
                      </Box>{' '}
                      that keep eyes glued to the screen, and tweak{' '}
                      <Box component="span" sx={highlight}>
                        YouTube
                      </Box>
                      ’s hidden dials so your{' '}
                      <Box component="span" sx={highlight}>
                        audience
                      </Box>{' '}
                      can’t scroll away.
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: '1.12rem',
                        lineHeight: 1.9,
                        mt: 2,
                        color: '#e0f2fe',
                        textAlign:'justify'
                      }}
                    >
                      Let’s turn your{' '}
                      <Box component="span" sx={emphasis}>
                        brand’s whispers
                      </Box>{' '}
                      into a{' '}
                      <Box component="span" sx={highlight}>
                        roar
                      </Box>
                      —and your{' '}
                      <Box component="span" sx={highlight}>
                        viewers
                      </Box>{' '}
                      into regulars.
                    </Typography>
                    <Button
                    variant="contained"
                    endIcon={<NearMeOutlinedIcon />}
                    sx={{
                        mt: 4,
                        mb: 5,
                        fontFamily: 'Poppins',
                        fontWeight: 600,
                        fontSize: '1rem',
                        padding: '12px 24px',
                        background: 'linear-gradient(135deg, #1e88e5, #43a047)',
                        color: '#ffffff',
                        textTransform: 'none',
                        borderRadius: '12px',
                        boxShadow: '0 0 20px rgba(66, 165, 245, 0.4)',
                        transition: 'all 0.3s ease-in-out',
                        textShadow: '0px 1px 3px rgba(0,0,0,0.4)',
                        '&:hover': {
                        background: 'linear-gradient(135deg, #43a047, #1e88e5)',
                        transform: 'scale(1.05)',
                        boxShadow: '0 0 30px rgba(66, 165, 245, 0.6), 0 0 40px rgba(67, 160, 71, 0.4)',
                        },
                    }}
                    onClick={() => window.location.href = 'mailto:moin.coder@gmail.com'}
                    >
                    Say Hello
                    </Button>

                  </CardContent>
                </Box>
                <Box sx={{maxWidth: '300px', ml: { md: 13, lg: 23 }}}>
                  <Avatar
                 
                    alt="Moin Islam"
                    src="portfolio.png"
                    sx={{
                      width: '220px',
                      height: '220px',
                      boxShadow: '0 0 20px #1e88e580',
                      transition: '0.3s',
                      '&:hover': {
                        boxShadow: '0 0 35px #1e88e5cc',
                      },
                    }}
                    variant="rounded"
                  />
                </Box>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const highlight = {
  bgcolor: '#e0f2fe',
  color: '#0369a1',
  fontWeight: 700,
  px: 1,
  borderRadius: 1,
  boxShadow: '1px 1px 5px rgba(3, 105, 161, 0.3)',
  // display: 'inline-block',
};

const emphasis = {
  color: '#16a34a',
  fontWeight: 700,
  textShadow: '0 1px 1px rgba(0, 0, 0, 0.1)',
  // display: 'inline-block',
};

export default Data;
