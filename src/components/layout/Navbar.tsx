import { AdbOutlined } from "@mui/icons-material";
import { AppBar, Container, Toolbar, Box, IconButton, Typography, Button, Menu, MenuItem} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React, { Fragment } from "react";
import { Props } from "../../@types/models";
import { authRoutes } from "../../routes/routes";

const Navbar : React.FC<Props> = (props: Props) => {
    const pages = ['Shop', 'Give feedback'];
    const menuItems = ['Profile', 'Logout'];

    const [anchorMenu, setAnchorMenu] = React.useState<null | HTMLElement>(null);

    const openMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorMenu(event.currentTarget)
    }
    const closeMenu = () => {
        setAnchorMenu(null);
    }

    if(authRoutes.indexOf(window.location.pathname) !== -1){
        return (
            <Fragment>
                {props.children}
            </Fragment>
        )
    }

    return(
        <div>
            <AppBar position="static" sx={{backgroundColor: '#ffffff', color: 'black', boxShadow: 'none'}}>
                <Container>
                    <Toolbar disableGutters>
                        <AdbOutlined sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'black' }}/>
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={openMenu}
                                color="inherit"
                            >
                            <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorMenu}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorMenu)}
                                onClose={closeMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={openMenu}>
                                <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                            </Menu>
                        </Box>
                        <AdbOutlined sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: 'black' }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            }}
                        >
                            LOGO
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={closeMenu}
                                sx={{ my: 2, color: 'black', display: 'block'}}
                            >
                                {page}
                            </Button>
                            ))}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
            <Fragment>
                {props.children}
            </Fragment>
        </div>
    )
}

export default Navbar;