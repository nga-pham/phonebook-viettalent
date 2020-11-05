import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import PeopleIcon from "@material-ui/icons/People";
import SearchIcon from "@material-ui/icons/Search";
import Edit from "@material-ui/icons/Edit";
import { useState } from "react";
import { fade, makeStyles } from "@material-ui/core";
import { connect } from "react-redux";
// import ReactAutocomplete from "react-autocomplete";

// import Autocomplete from "@material-ui/lab/Autocomplete";

// import { AutoComplete } from "material-ui/lab/AutoComplete";
// import AutoComplete from "material-ui/AutoComplete";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    border: fade(theme.palette.common.black, 0.15),
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "60ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

const _NavBar = (props) => {
  const classes = useStyles();
  const [edit, setEdit] = useState(true); // Toogle between 'edit' and 'exit'
  const [value, setValue] = useState("");

  const toggleEdit = () => {
    setEdit(!edit);
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <AppBar position="static" color="transparent">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="phone-book"
        >
          <PeopleIcon />
        </IconButton>
        <Typography className={classes.title} variant="h6" noWrap>
          Danh bạ
        </Typography>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Tìm kiếm danh bạ"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
        <div className={classes.sectionDesktop}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="edit-button"
            onClick={toggleEdit}
          >
            <Edit />
            <Typography className={classes.title} variant="h6" noWrap>
              {edit ? "Thoát" : "Chỉnh sửa"}
            </Typography>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state) => {
  const { key, data } = state;
  return {
    data,
  };
};

const NavBar = connect(mapStateToProps, null)(_NavBar);

export default NavBar;
