import React, { useState } from 'react';
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  Grid,
  Typography,
  Modal,
  Fade,
  Backdrop,
  IconButton
} from '@mui/material';

const projects = [
  { id: 1, title: 'URL Shortener', img: 'url.png', categories: ['Web Development'], livelink: "https://shortify-link.vercel.app/", details: "https://github.com/dev-moinislam/URL-Shortener/blob/master/README.md", frontendGithubLink: "https://github.com/dev-moinislam/URL-Shortener.git", backendGithubLink: "" },
  { id: 2, title: 'Blood Bank', img: 'bloodBank.png', categories: ['Web Development'], livelink: "https://fullstack-nextjs-blood-bank.vercel.app/", details: "https://github.com/dev-moinislam/fullstack-nextjs-blood-bank/blob/master/README.md", frontendGithubLink: "https://github.com/dev-moinislam/fullstack-nextjs-blood-bank.git", backendGithubLink: "" },
  { id: 3, title: 'VidShare', img: 'vidShare.png', categories: ['Web Development'], livelink: "https://vid-share.vercel.app/", details: "https://github.com/dev-moinislam/VideoShare/blob/master/README.md", frontendGithubLink: "https://github.com/dev-moinislam/VideoShare.git", backendGithubLink: "" },
  { id: 4, title: 'WishperWave - Chat App', img: 'wishperWave.png', categories: ['Web Development'], livelink: "https://wishper-wave.vercel.app/", details: "https://github.com/dev-moinislam/wishper-wave-frontend/blob/master/README.md", frontendGithubLink: "https://github.com/dev-moinislam/wishper-wave-frontend.git", backendGithubLink: "https://github.com/dev-moinislam/wishper-wave-backend.git" },
  { id: 5, title: 'Portfolio', img: 'portfolioimg.png', categories: ['Web Development'], livelink: "https://dev-moin.vercel.app/", details: "https://github.com/dev-moinislam/portfolio/blob/master/README.md", frontendGithubLink: "https://github.com/dev-moinislam/portfolio.git", backendGithubLink: "" },

  // YouTube SEO
  { id: 6, title: 'YouTube SEO Demo 1', img: 'https://i.imghippo.com/files/OHI1914JSA.png', categories: ['YouTube SEO'] },
  { id: 7, title: 'YouTube SEO Demo 2', img: 'https://i.imghippo.com/files/BAgk5918vE.png', categories: ['YouTube SEO'] },
  { id: 8, title: 'YouTube SEO Demo 3', img: 'https://i.imghippo.com/files/oLO4922kDk.png', categories: ['YouTube SEO'] },
  { id: 9, title: 'YouTube SEO Demo 4', img: 'https://i.imghippo.com/files/weH1847Yk.png', categories: ['YouTube SEO'] },
  { id: 10, title: 'YouTube SEO Demo 5', img: 'https://i.imghippo.com/files/mZV4341eYo.png', categories: ['YouTube SEO'] },
  { id: 11, title: 'YouTube SEO Demo 6', img: 'https://i.imghippo.com/files/Zl5875NNM.png', categories: ['YouTube SEO'] },
  { id: 12, title: 'YouTube SEO Demo 7', img: 'https://i.imghippo.com/files/Ul1266T.png', categories: ['YouTube SEO'] },
  { id: 13, title: 'YouTube SEO Demo 8', img: 'https://i.imghippo.com/files/tizf9406dac.png', categories: ['YouTube SEO'] },
  { id: 14, title: 'YouTube SEO Demo 9', img: 'https://i.imghippo.com/files/Xa5063sY.jpg', categories: ['YouTube SEO'] },
  { id: 15, title: 'YouTube SEO Demo 10', img: 'https://i.imghippo.com/files/biP7072sIg.jpg', categories: ['YouTube SEO'] },
  { id: 16, title: 'YouTube SEO Demo 11', img: 'https://i.imghippo.com/files/Vy9652oPw.jpg', categories: ['YouTube SEO'] },
  { id: 17, title: 'YouTube SEO Demo 12', img: 'https://i.imghippo.com/files/ErCX3034CZI.jpg', categories: ['YouTube SEO'] },
  { id: 18, title: 'YouTube SEO Demo 13', img: 'https://i.imghippo.com/files/vlM9755fp.png', categories: ['YouTube SEO'] },
  { id: 19, title: 'YouTube SEO Demo 14', img: 'https://i.imghippo.com/files/Kc9074jIM.png', categories: ['YouTube SEO'] },

  // Video Editing
  { id: 20, title: 'Gym Promo Reel', video: 'gym-reel.mp4', categories: ['Video Editing'] },
  { id: 21, title: 'Travel B-Roll', video: 'travel-broll.mp4', categories: ['Video Editing'] },
  { id: 22, title: 'Testimonial Edit', video: 'testimonial-edit.mp4', categories: ['Video Editing'] },
];


const categories = ['YouTube SEO', 'Web Development', 'Video Editing'];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('YouTube SEO');
  const [previewImage, setPreviewImage] = useState(null);

  const filteredProjects = projects.filter((project) =>
    project.categories.includes(selectedCategory)
  );

  const handleOpen = (imgSrc) => {
    setPreviewImage(imgSrc);
  };

  const handleClose = () => {
    setPreviewImage(null);
  };

  return (
    <Box id="portfolio" sx={{ flexGrow: 1, mt: 10 }}>
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Typography variant="h4" sx={{ letterSpacing: '.2rem', fontFamily: 'Poppins', fontWeight: { xs: '400', sm: '400', md: '600' } }}>
          Portfolio
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" sx={{ fontFamily: 'Poppins' }}>
          My recent work
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
        <ButtonGroup sx={{ px: 1 }}>
          {categories.map((category) => (
            <Button
              key={category}
              sx={{
                fontSize: '12px',
                color: selectedCategory === category ? 'white' : 'black',
                borderColor: 'black',
                backgroundColor: selectedCategory === category ? 'black' : 'white',
                '&:hover': {
                  backgroundColor: selectedCategory === category ? 'black' : 'grey.300',
                }
              }}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </ButtonGroup>
      </Box>

      <Box sx={{ flexWrap: 'wrap', justifyContent: 'center', display: 'flex', gap: '20px', px: 3 }}>
        {filteredProjects.map((project) => (
          <Card key={project.id} sx={{ width: { xs: '90%', sm: '70%', md: '45%', lg: '30%' }, mb: 5 }}>
            <CardContent>
              <Typography variant="h6" align="center" sx={{ fontFamily: 'Poppins', letterSpacing: '.1rem', mb: 2 }}>
                {project.title}
              </Typography>

              {/* Video Editing Category */}
              {selectedCategory === 'Video Editing' && project.video && (
                <video width="100%" height="auto" controls style={{ borderRadius: '8px' }}>
                  <source src={project.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}

              {/* YouTube SEO Category */}
              {selectedCategory === 'YouTube SEO' && project.img && (
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mb: 2,
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease',
                    '&:hover': { transform: 'scale(1.05)' },
                  }}
                  onClick={() => handleOpen(project.img)}
                >
                  <Avatar
                    alt={project.title}
                    src={project.img}
                    variant="rounded"
                    sx={{ width: '100%', height: 'auto', maxWidth: '300px', borderRadius: 2 }}
                  />
                </Box>
              )}

              {/* Web Development Category */}
              {selectedCategory === 'Web Development' && project.img && (
                <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
                  <Avatar
                    alt={project.title}
                    src={project.img}
                    variant="rounded"
                    sx={{ width: '100%', height: 'auto', maxWidth: '300px', borderRadius: 2 }}
                  />
                </Box>
              )}

              {/* Web Dev Links */}
              {selectedCategory === 'Web Development' && (
                <Grid container spacing={2}>
                  {project.livelink && (
                    <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Box component="a" href={project.livelink} target="_blank" sx={{ fontSize: 14, color: '#7dc5f5' }}>
                        🌐 Live
                      </Box>
                    </Grid>
                  )}
                  {project.details && (
                    <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Box component="a" href={project.details} target="_blank" sx={{ fontSize: 14, color: '#767674' }}>
                        📄 Details
                      </Box>
                    </Grid>
                  )}
                  {project.frontendGithubLink && (
                    <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Box component="a" href={project.frontendGithubLink} target="_blank" sx={{ fontSize: 14, color: 'black' }}>
                        💻 Frontend
                      </Box>
                    </Grid>
                  )}
                  {project.backendGithubLink && (
                    <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Box component="a" href={project.backendGithubLink} target="_blank" sx={{ fontSize: 14, color: 'black' }}>
                        🗄️ Backend
                      </Box>
                    </Grid>
                  )}
                </Grid>
              )}
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Image Preview Modal */}
      <Modal
  open={!!previewImage}
  onClose={handleClose}
  closeAfterTransition
  BackdropComponent={Backdrop}
  BackdropProps={{ timeout: 300 }}
>
  <Fade in={!!previewImage}>
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        bgcolor: 'rgba(0, 0, 0, 0.95)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2,
        zIndex: 1300,
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        touchAction: 'pan-y pinch-zoom',
      }}
      onClick={handleClose}
    >
      <Box
        onClick={(e) => e.stopPropagation()}
        sx={{
          position: 'relative',
          maxWidth: '90vw',
          maxHeight: '90vh',
          width: '100%',
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',
            top: 10,
            right: 10,
            color: 'white',
            backgroundColor: 'rgba(0,0,0,0.6)',
            zIndex: 1400,
            '&:hover': {
              backgroundColor: 'rgba(0,0,0,0.8)',
            },
          }}
        >
          ❌
        </IconButton>

        {/* Responsive Image Preview */}
        <Box
          component="img"
          src={previewImage}
          alt="Preview"
          sx={{
            width: '100%',
            height: 'auto',
            maxHeight: '90vh',
            borderRadius: 2,
            objectFit: 'contain',
            touchAction: 'pinch-zoom',
          }}
        />
      </Box>
    </Box>
  </Fade>
</Modal>
    </Box>
  );
};

export default Portfolio;
