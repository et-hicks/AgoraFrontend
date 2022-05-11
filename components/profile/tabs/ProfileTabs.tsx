import styles from "../../../styles/Home.module.css";
import GenericButton from "../../buttons/GenericButton";
import MenuIcon from '@mui/icons-material/Menu';
import AdbIcon from '@mui/icons-material/Adb';
import {AccountCircle} from "@mui/icons-material";
import Link from 'next/link'
import {
    AppBar, Avatar,
    Box, Button, Container,
    FormControlLabel,
    FormGroup,
    IconButton, Menu,
    MenuItem,
    Switch,
    Toolbar, Tooltip,
    Typography
} from "@mui/material";
import {ChangeEvent, useState} from "react";
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import {useRouter} from "next/router";
// export default function ProfileTabs() {
    // my thing
    // return (
    //     <div style={{
    //         // border: "3px solid black",
    //         borderBottom: "3px solid lightgrey",
    //         // width: "85vw",
    //         height: "7vh",
    //         position: "sticky",
    //         top: "0",
    //         margin: "auto",
    //         backgroundColor: "#FBF9FF",
    //         zIndex: "9001",
    //         display: "flex",
    //         flexDirection: "row"
    //     }}>
    //         {/*<div className={styles.tab}>*/}
    //         {/*    <button className={styles.tablinks}> Profile </button>*/}
    //         {/*    <button className={styles.tablinks}> Topics & Hashtags</button>*/}
    //         {/*    <button className={styles.tablinks} > Filter </button>*/}
    //         {/*    <button className={styles.tablinks} > Search </button>*/}
    //         {/*</div>*/}
    //         <div style={{
    //             margin: "auto 0vw auto 1vw"
    //         }}>
    //             <GenericButton displayText={"Profile"} />
    //         </div>
    //         <div style={{
    //             margin: "auto 0vw auto 1vw"
    //         }}>
    //             <GenericButton displayText={"Topics & Hashtags"} />
    //         </div>
    //
    //         <div style={{
    //             margin: "auto 0vw auto 1vw"
    //         }}>
    //             <GenericButton displayText={"Filter"} />
    //         </div>
    //
    //         <div style={{
    //             margin: "auto 0vw auto 1vw"
    //         }}>
    //             <GenericButton displayText={"Search"} />
    //         </div>
    //
    //         {/*<div>*/}
    //         {/*    Added Filters and other changes search term*/}
    //         {/*</div>*/}
    //         {/*<div>*/}
    //         {/*    This can be hidden*/}
    //         {/*</div>*/}
    //     </div>
    // );
    // MUI thing
//     const [auth, setAuth] = useState(true);
//     const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
//
//     const handleChange = (event: any) => {
//         setAuth(event.target.checked);
//     };
//
//     const handleMenu = (event: any) => {
//         setAnchorEl(event.currentTarget);
//     };
//
//     const handleClose = () => {
//         setAnchorEl(null);
//     };
//
//     return (
//         <Box sx={{ flexGrow: 1 }}>
//             <FormGroup>
//                 <FormControlLabel
//                     control={
//                         <Switch
//                             checked={auth}
//                             onChange={handleChange}
//                             aria-label="login switch"
//                         />
//                     }
//                     label={auth ? 'Logout' : 'Login'}
//                 />
//             </FormGroup>
//             <AppBar position="static">
//                 <Toolbar>
//                     <IconButton
//                         size="large"
//                         edge="start"
//                         color="inherit"
//                         aria-label="menu"
//                         sx={{ mr: 2 }}
//                     >
//                         <MenuIcon />
//                     </IconButton>
//                     <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//                         Photos
//                     </Typography>
//                     {auth && (
//                         <div>
//                             <IconButton
//                                 size="large"
//                                 aria-label="account of current user"
//                                 aria-controls="menu-appbar"
//                                 aria-haspopup="true"
//                                 onClick={handleMenu}
//                                 color="inherit"
//                             >
//                                 <AccountCircle />
//                             </IconButton>
//                             <Menu
//                                 id="menu-appbar"
//                                 anchorEl={anchorEl}
//                                 anchorOrigin={{
//                                     vertical: 'top',
//                                     horizontal: 'right',
//                                 }}
//                                 keepMounted
//                                 transformOrigin={{
//                                     vertical: 'top',
//                                     horizontal: 'right',
//                                 }}
//                                 open={Boolean(anchorEl)}
//                                 onClose={handleClose}
//                             >
//                                 <MenuItem onClick={handleClose}>Profile</MenuItem>
//                                 <MenuItem onClick={handleClose}>My account</MenuItem>
//                             </Menu>
//                         </div>
//                     )}
//                 </Toolbar>
//             </AppBar>
//         </Box>
//     );
// }


const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const ResponsiveAppBar = () => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] =  useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = (e: any) => {
        e.preventDefault()
        // console.log(e)
        setAnchorElNav(null);
        router.push("/discussion/yes")
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const router = useRouter()
    // const style = {
    //     marginRight: 10,
    //     color: router.asPath === href ? 'red' : 'black',
    // }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/*<AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />*/}
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <Link href="/"> Agora Community </Link>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
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
                                    <Typography textAlign="center">
                                            {page}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
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
                        Where is this
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                    {page}
                            </Button>
                        ))}
                    </Box>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                    {/*<Box sx={{ flexGrow: 0 }}>*/}
                    {/*    <Tooltip title="Open settings">*/}
                    {/*        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>*/}
                    {/*            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />*/}
                    {/*        </IconButton>*/}
                    {/*    </Tooltip>*/}
                    {/*    <Menu*/}
                    {/*        sx={{ mt: '45px' }}*/}
                    {/*        id="menu-appbar"*/}
                    {/*        anchorEl={anchorElUser}*/}
                    {/*        anchorOrigin={{*/}
                    {/*            vertical: 'top',*/}
                    {/*            horizontal: 'right',*/}
                    {/*        }}*/}
                    {/*        keepMounted*/}
                    {/*        transformOrigin={{*/}
                    {/*            vertical: 'top',*/}
                    {/*            horizontal: 'right',*/}
                    {/*        }}*/}
                    {/*        open={Boolean(anchorElUser)}*/}
                    {/*        onClose={handleCloseUserMenu}*/}
                    {/*    >*/}
                    {/*        {settings.map((setting) => (*/}
                    {/*            <MenuItem key={setting} onClick={handleCloseUserMenu}>*/}
                    {/*                <Typography textAlign="center">{setting}</Typography>*/}
                    {/*            </MenuItem>*/}
                    {/*        ))}*/}
                    {/*    </Menu>*/}
                    {/*</Box>*/}
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;
