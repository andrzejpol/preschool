import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import React, { useState } from 'react';
import { accentColor, textColor } from '../../core/styles/ColorVariables';
// import Logo from '../../assets/logo.png';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function MainPage() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar position="static" color="transparent">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon
              sx={{
                display: { xs: 'none', md: 'flex' },
                mr: 1,
                color: accentColor,
              }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: accentColor,
                textDecoration: 'none',
              }}
            >
              {"Hello"}
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="primary"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
                <MenuItem
                  sx={{
                    border: `1px solid ${accentColor}`,
                    mb: 1,
                    borderRadius: '4px',
                  }}
                >
                  <Typography textAlign="center">Zaloguj</Typography>
                </MenuItem>
                <MenuItem
                  sx={{
                    border: `1px solid ${accentColor}`,
                    borderRadius: '4px',
                  }}
                >
                  <Typography textAlign="center">Zarejestruj</Typography>
                </MenuItem>
              </Menu>
            </Box>
            <AdbIcon
              sx={{
                display: { xs: 'flex', md: 'none' },
                mr: 1,
              }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: accentColor,
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: textColor, display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
              <Button
                sx={{
                  my: 2,
                  mr: 2,
                  color: textColor,
                  display: 'block',
                  border: `1px solid ${accentColor}`,
                }}
              >
                Zaloguj
              </Button>
              <Button
                sx={{
                  my: 2,
                  color: textColor,
                  display: 'block',
                  border: `1px solid ${accentColor}`,
                }}
              >
                Zarejestruj
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {/* main */}
      <Container maxWidth="xl" sx={{ bgcolor: 'red', height: '20px' }} />
      {/* footer */}
      <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
        <Container maxWidth="lg">
          <Typography
            variant="body2"
            color={textColor}
            align="center"
            sx={{ pt: 5 }}
          >
            © {new Date().getFullYear()} Andrzej Polak. Wszelkie prawa
            zastrzeżone.
          </Typography>
        </Container>
      </Box>
    </>
  );
}

export default MainPage;
