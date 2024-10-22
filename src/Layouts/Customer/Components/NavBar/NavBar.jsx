import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";

import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TableRowsIcon from "@mui/icons-material/TableRows";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { CustomerContext } from "../../Context/Context";

const pages = ["Products", "Pricing", "Blog"];
const customerPages = [
  { title: "Home", path: "/" },
  { title: "About", path: "/About" },
  { title: "Menu", path: "/Menus" },
  { title: "Contact", path: "/Contact" },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const customerAccount = [
  { title: "Cart", path: "/Cart" },
  { title: "Orders", path: "/Orders" },
  { title: "Profile", path: "/Profile" },
];

function NavBar() {
  const {customer,setCustomer,host} = React.useContext(CustomerContext);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const drawerOptions = [
    { title: "Home", path: "/", icon: <HomeIcon /> },
    { title: "About", path: "/About", icon: <InboxIcon /> },
    { title: "Contact", path: "/Contact", icon: <ContactsIcon /> },
  ];
  const drawerAccountOptions = [
    { title: "Cart", path: "/Cart", icon: <ShoppingCartIcon /> },
    { title: "Orders", path: "/Orders", icon: <TableRowsIcon /> },
    { title: "Profile", path: "/Profile", icon: <AccountCircleIcon /> },
  ];
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {drawerOptions.map((text, index) => (
          <ListItem component={Link} to={text.path} key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>{text.icon}</ListItemIcon>
              <ListItemText
                primary={
                  <Typography sx={{ fontWeight: 900, color: "gray" }}>
                    {text.title}
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
        { drawerAccountOptions.map((text, index) => (
          <ListItem component={Link} to={text.path} key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>{text.icon}</ListItemIcon>
              <ListItemText
                primary={
                  <Typography sx={{ fontWeight: 900, color: "gray" }}>
                    {text.title}
                  </Typography>
                }
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleLogout = () => {
    handleCloseUserMenu();
    localStorage.removeItem("customerToken");
    setCustomer(null);
    

  };
  // console.log(customer)
  return (
    <AppBar
      elevation={0}
      sx={{
        p: 1,
        position: "fixed",
        backgroundColor: "transparent",
        // backdropFilter: "blur(10px)",
      }}
    >
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <img src={"https://www.brandbucket.com/sites/default/files/logo_uploads/121437/large_foodure.png"}
            style={{ display: { xs: 'none', md: 'flex' }, marginRight: '8px', height: '80px', marginRight: '10px', borderRadius: '5px' }}></img>
          

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
              gap: 3,
            }}
          >
            
            {customerPages.map((page, index) => (
              <Button
                key={index}
                component={Link}
                to={page.path}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block",fontWeight:'bold',color: "white"}}
              >
                {page.title}
              </Button>
            ))}
            {!customer &&(
              <Button
              component={Link}
              to={"/Login"}
              sx={{ my: 2, color: "white", display: "block",fontWeight:'bold' }}
            >
              Login
            </Button>    
            )}
            
          </Box>
          {customer && (
            <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar src={`${host}/customerUpload/customer/${customer?.profile}`} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {customerAccount.map((setting, index) => (
                <MenuItem
                  key={index}
                  component={Link}
                  to={setting.path}
                  onClick={handleCloseUserMenu}
                >
                  <Typography sx={{ textAlign: "center" }}>
                    {setting.title}
                  </Typography>
                </MenuItem>
              ))}
              <MenuItem onClick={handleLogout}>
                <Typography sx={{ textAlign: "center" }}>Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
          )}
          
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;
