import * as React from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Box, CssBaseline, Stack, Typography } from "@mui/material";
import tavernTheme from "../../theme/theme";
import userImage from "../../assets/userImg.png";
import { NavLink } from "react-router-dom";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
   width: drawerWidth,
   transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
   }),
   overflowX: "hidden",
   [theme.breakpoints.up("lg")]: {
      position: "relative",
      zIndex: 1,
   },
   [theme.breakpoints.down("lg")]: {
      position: "fixed",
      zIndex: 111,
      transition: "none",
   },
});

const closedMixin = (theme: Theme): CSSObject => ({
   transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
   }),
   overflowX: "hidden",
   width: `calc(${theme.spacing(7)} + 1px)`,
   [theme.breakpoints.up("sm")]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
   },
   [theme.breakpoints.down("lg")]: {
      transition: "none", // Override transition for screens smaller than 'lg'
   },
});

const DrawerHeader = styled("div")(({ theme }) => ({
   display: "flex",
   alignItems: "center",
   justifyContent: "space-around",
   padding: theme.spacing(0, 1),
   ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
   open?: boolean;
}

const AppBar = styled(MuiAppBar, {
   shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme }) => ({
   zIndex: theme.zIndex.drawer + 1,
   transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
   }),
   background: "transparent",
   boxShadow: "none",
   borderBottom: "1px solid rgba(255 255 255 / 0.23)",
   variants: [
      {
         props: ({ open }) => open,
         style: {
            marginLeft: drawerWidth,
            width: `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(["width", "margin"], {
               easing: theme.transitions.easing.sharp,
               duration: theme.transitions.duration.enteringScreen,
            }),
         },
      },
   ],
}));

const Drawer = styled(MuiDrawer, {
   shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
   width: drawerWidth,
   flexShrink: 0,
   whiteSpace: "nowrap",
   boxSizing: "border-box",
   variants: [
      {
         props: ({ open }) => open,
         style: {
            ...openedMixin(theme),
            "& .MuiDrawer-paper": openedMixin(theme),
         },
      },
      {
         props: ({ open }) => !open,
         style: {
            ...closedMixin(theme),
            "& .MuiDrawer-paper": closedMixin(theme),
         },
      },
   ],
}));

export default function MiniDrawer() {
   const initialScreen = window.innerWidth > 1024;

   const [open, setOpen] = React.useState(initialScreen);
   const [isLargeScreen, setIsLargeScreen] = React.useState(initialScreen);
   const [isScrolled, setIsScrolled] = React.useState(false);

   React.useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY > 600) {
            setIsScrolled(true);
         } else {
            setIsScrolled(false);
         }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
   }, []);

   React.useEffect(() => {
      const handleResize = () => {
         setIsLargeScreen(window.innerWidth > 1024);
      };
      window.addEventListener("resize", handleResize);
      return () => {
         window.removeEventListener("resize", handleResize);
      };
   }, []);

   const generalLinks = [
      { id: 1, name: "Dashboard", link: "/" },
      { id: 2, name: "Profile", link: "/profile" },
   ];
   const dmLinks = [
      { id: 1, name: "Lobbies", link: "/lobbies" },
      { id: 2, name: "Create Room", link: "/create-room" },
   ];

   const handleDrawerOpen = () => {
      setOpen(true);
   };

   const handleDrawerClose = () => {
      setOpen(false);
   };

   return (
      <>
         <CssBaseline />
         <AppBar
            position="fixed"
            open={open}
            sx={{
               backgroundColor: isScrolled
                  ? "rgba(61 90 129 / 0.75)"
                  : "transparent",
               backdropFilter: isScrolled ? "blur(4px)" : "none",
               transition:
                  "background-color 0.3s ease, backdrop-filter 0.3s ease",
            }}
         >
            <Toolbar>
               <Stack
                  sx={[
                     {
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexDirection: "row",
                     },
                     open && { justifyContent: "flex-end" },
                  ]}
               >
                  <IconButton
                     color="inherit"
                     aria-label="open drawer"
                     onClick={handleDrawerOpen}
                     edge="start"
                     sx={[
                        {
                           marginRight: 5,
                        },
                        open && { display: "none" },
                     ]}
                  >
                     <MenuIcon />
                  </IconButton>
                  <Box
                     sx={[
                        {
                           display: "flex",
                           justifyContent: "space-evenly",
                           alignItems: "center",
                           flexDirection: "row",
                        },
                     ]}
                     className="xs:w-1/3 sm:w-1/3 md:w-1/6"
                  >
                     <img src={userImage} alt="user" />
                     {isLargeScreen && (
                        <Typography variant="body1">Test User</Typography>
                     )}
                  </Box>
               </Stack>
            </Toolbar>
         </AppBar>

         <Drawer
            variant="permanent"
            open={open}
            color="primary"
            sx={{
               "& .MuiDrawer-paper": {
                  backgroundColor: "#071E3D",
                  position: "fixed",
                  height: "100%",
                  zIndex: 1,
               },
            }}
         >
            <DrawerHeader>
               {open && (
                  <Typography variant="h6" color="white">
                     Hero Tavern
                  </Typography>
               )}

               <IconButton
                  onClick={handleDrawerClose}
                  sx={{
                     color: tavernTheme.palette.primary.main,
                  }}
               >
                  {tavernTheme.direction === "rtl" ? (
                     <ChevronRightIcon />
                  ) : (
                     <ChevronLeftIcon sx={{ width: "2rem", height: "2rem" }} />
                  )}
               </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
               {open && (
                  <p className="text-2xl text-[#3F61A4] font-bold py-2 px-6 text-left ">
                     General
                  </p>
               )}
               {generalLinks.map((el, index) => {
                  return (
                     <NavLink to={el.link} key={el.id}>
                        {({ isActive }) => (
                           <ListItem
                              disablePadding
                              sx={{ display: "block" }}
                              className={`${
                                 isActive
                                    ? "bg-[rgba(63,97,164,0.35)] text-white relative after:absolute after:w-2 after:opacity-40 after:h-full after:bg-[#071E3D] after:bottom-0 after:right-0 after:rounded-sm after:backdrop-blur-sm after:shadow-lg"
                                    : "bg-transparent text-[#3F61A4]"
                              }  hover:bg-[rgba(63,97,164,0.35)] hover:text-white transition-all duration-200 cursor-pointer`}
                           >
                              <ListItemButton
                                 sx={[
                                    index === 0
                                       ? {
                                            minHeight: 48,
                                            px: 2.5,
                                         }
                                       : {
                                            minHeight: 48,
                                            px: 2.5,
                                         },
                                    open
                                       ? {
                                            justifyContent: "initial",
                                         }
                                       : {
                                            justifyContent: "center",
                                         },
                                 ]}
                              >
                                 <ListItemIcon
                                    sx={[
                                       index === 0
                                          ? {
                                               minWidth: 0,
                                               justifyContent: "center",
                                               color: "inherit",
                                            }
                                          : {
                                               minWidth: 0,
                                               justifyContent: "center",
                                               color: "inherit",
                                            },
                                       open
                                          ? {
                                               mr: 3,
                                            }
                                          : {
                                               mr: "auto",
                                            },
                                    ]}
                                 >
                                    {index % 2 === 0 ? (
                                       <InboxIcon />
                                    ) : (
                                       <MailIcon />
                                    )}
                                 </ListItemIcon>
                                 <ListItemText
                                    primary={el.name}
                                    sx={[
                                       open
                                          ? {
                                               opacity: 1,
                                            }
                                          : {
                                               opacity: 0,
                                            },
                                    ]}
                                 />
                              </ListItemButton>
                           </ListItem>
                        )}
                     </NavLink>
                  );
               })}
            </List>
            <Divider />
            <List>
               {open && (
                  <p className="text-2xl text-[#3F61A4] font-bold py-2 px-6 text-left">
                     For DM
                  </p>
               )}
               {dmLinks.map((el, index) => (
                  <NavLink to={el.link} key={el.id}>
                     {({ isActive }) => (
                        <ListItem
                           disablePadding
                           sx={{ display: "block" }}
                           className={`${
                              isActive
                                 ? "bg-[rgba(63,97,164,0.35)] text-white relative after:absolute after:w-2 after:opacity-40 after:h-full after:bg-[#071E3D] after:bottom-0 after:right-0 after:rounded-sm after:backdrop-blur-sm after:shadow-lg"
                                 : "bg-transparent text-[#3F61A4]"
                           }  hover:bg-[rgba(63,97,164,0.35)] hover:text-white transition-all duration-200 cursor-pointer`}
                        >
                           <ListItemButton
                              sx={[
                                 {
                                    minHeight: 48,
                                    px: 2.5,
                                    color: "inherit",
                                 },
                                 open
                                    ? {
                                         justifyContent: "initial",
                                      }
                                    : {
                                         justifyContent: "center",
                                      },
                              ]}
                           >
                              <ListItemIcon
                                 sx={[
                                    {
                                       minWidth: 0,
                                       justifyContent: "center",
                                       color: "inherit",
                                    },
                                    open
                                       ? {
                                            mr: 3,
                                         }
                                       : {
                                            mr: "auto",
                                         },
                                 ]}
                              >
                                 {index % 2 === 0 ? (
                                    <InboxIcon />
                                 ) : (
                                    <MailIcon />
                                 )}
                              </ListItemIcon>
                              <ListItemText
                                 primary={el.name}
                                 sx={[
                                    open
                                       ? {
                                            opacity: 1,
                                         }
                                       : {
                                            opacity: 0,
                                         },
                                 ]}
                              />
                           </ListItemButton>
                        </ListItem>
                     )}
                  </NavLink>
               ))}
            </List>
         </Drawer>
      </>
   );
}
