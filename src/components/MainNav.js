import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (value === 0) navigate("/");
    else if (value === 1) navigate("/movies");
    else if (value === 2) navigate("/series");
    else if (value === 3) navigate("/search");
    else if (value === 4) navigate("/about");
  }, [value, navigate]);

  return (
    <div>
      <BottomNavigation
        style={style.navigation}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Trending"
          style={{ color: "white" }}
          icon={<WhatshotIcon />}
        />
        <BottomNavigationAction
          label="Movies"
          style={{ color: "white" }}
          icon={<MovieCreationIcon />}
        />
        <BottomNavigationAction
          label="TVSeries"
          style={{ color: "white" }}
          icon={<LiveTvIcon />}
        />
        <BottomNavigationAction
          label="Search"
          style={{ color: "white" }}
          icon={<SearchIcon />}
        />
        <BottomNavigationAction
          label="About Us"
          style={{ color: "white" }}
          icon={<PersonIcon />}
        />
      </BottomNavigation>
    </div>
  );
}

const style = {
  navigation: {
    background: "#2d313a",
    bottom: 0,
    width: "100%",
    zIndex: 100,
    position: "fixed",
  },
};
