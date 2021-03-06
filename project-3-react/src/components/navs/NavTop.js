import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useSelector } from "react-redux";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
import FilterListIcon from "@mui/icons-material/FilterList";

export default function NavTop() {
  const userId = useSelector((state) => state.user.userId);
  const userUsername = useSelector((state) => state.user.username);

  return (
    <Box sx={{ flexGrow: 0 }}>
      <AppBar position="relative" sx={{ bgcolor: "#4ca7ea" }}>
        <Toolbar>
          {userId && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="logout"
              component={RouterLink}
              to={`/logout`}
            >
              <LogoutIcon />
            </IconButton>
          )}

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", sm: "flex" },
              justifyContent: "center",
            }}
          >
            OnlyFriends
          </Typography>

          {userId && (
            <>
              <IconButton
                size="large"
                edge="end"
                color="inherit"
                aria-label="logout"
                component={RouterLink}
                to={`/${userUsername}/filter`}
              >
                <FilterListIcon />
              </IconButton>

              <IconButton
                size="large"
                edge="end"
                aria-label="show 69 new notifications"
                color="inherit"
              >
                <Badge badgeContent={69} color="error">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
