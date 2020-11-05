import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import AddIcon from "@material-ui/icons/Add";
import CameraAlt from "@material-ui/icons/CameraAlt";
import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewItem } from "./action";

const styles = (theme) => {
  return {
    button: {
      marginTop: theme.spacing(6),
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      position: "absolute",
      width: "100vh",
      height: "100vh",
      backgroundColor: theme.palette.background.paper,
      border: "none",
    },
    title: {
      paddingLeft: "16px",
    },
    gridBox: {
      margin: "16px 64px",
    },
    textField: {
      width: "100%",
    },
    textLabel: {
      alignItems: "center",
      justifyContent: "center",
    },
    buttonSubmit: {
      float: "right",
      position: "relative",
      marginRight: "32px",
      fontSize: "1em",
      color: "#0000ff",
    },
    avatar: {
      height: "90px",
      width: "90px",
    },
  };
};

class _FormInsert extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleOpen = () => {
    this.setState({
      open: true,
      new_item: {
        avatar: "",
        firstName: "",
        lastName: "",
        company: "",
        mobile: "",
        work: "",
        iphone: "",
        note: "",
      },
    });
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    let new_value = this.state.new_item;
    new_value[name] = value;
    this.setState({
      new_item: new_value,
    });
  };

  // input data here is slightly different with data from store
  // This function is used to convert data to the same format with data from store
  prepareToSubmit = (data) => {
    const {
      avatar,
      firstName,
      lastName,
      company,
      mobile,
      work,
      iphone,
      note,
    } = data;
    return {
      avatar,
      name: firstName + " " + lastName,
      company,
      mobile,
      work,
      iphone,
      note,
    };
  };

  handleSubmit = () => {
    this.handleClose();
    const { new_item } = this.state;
    const data_to_submit = this.prepareToSubmit(new_item);
    this.props.addNewItem(data_to_submit);
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    // Body of modal to insert new contact
    const body = (
      <div className={classes.paper}>
        <h5 className={classes.title} id="title">
          Tạo địa chỉ liên hệ mới
        </h5>
        <Divider />
        <Grid container>
          <Grid item xs={12} className={classes.gridBox}>
            <Grid container>
              <Grid item xs={3}>
                <Badge
                  overlap="circle"
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "right",
                  }}
                  badgeContent={<CameraAlt alt="take-picture" />}
                >
                  <Avatar alt="avatar" src="" className={classes.avatar} />
                </Badge>
              </Grid>
              <Grid item xs={7}>
                <Box className={classes.box}>
                  <TextField
                    label="Họ"
                    variant="outlined"
                    margin="dense"
                    className={classes.textField}
                    name="lastName"
                    onChange={this.handleChange}
                  />
                  <TextField
                    label="Tên"
                    margin="dense"
                    className={classes.textField}
                    variant="outlined"
                    name="firstName"
                    onChange={this.handleChange}
                  />
                  <TextField
                    label="Công ty"
                    margin="dense"
                    className={classes.textField}
                    variant="outlined"
                    name="company"
                    onChange={this.handleChange}
                  />
                </Box>
              </Grid>
              <Grid item xs={2}></Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} className={classes.gridBox}>
            <Grid container>
              <Grid item xs={3} className={classes.textLabel}>
                <p>Di động</p>
                <p>Iphone</p>
              </Grid>
              <Grid item xs={7}>
                <Box className={classes.box}>
                  <TextField
                    label=""
                    variant="outlined"
                    margin="dense"
                    className={classes.textField}
                    name="mobile"
                    onChange={this.handleChange}
                  />
                  <TextField
                    label=""
                    variant="outlined"
                    margin="dense"
                    className={classes.textField}
                    name="iphone"
                    onChange={this.handleChange}
                  />
                </Box>
              </Grid>
              <Grid item xs={2}></Grid>
            </Grid>
          </Grid>
          <Divider />
          <Grid item xs={12} className={classes.gridBox}>
            <Grid container>
              <Grid item xs={3}>
                <p>Ghi chú</p>
              </Grid>
              <Grid item xs={7}>
                <Box className={classes.box}>
                  <TextField
                    multiline
                    rows={4}
                    label=""
                    variant="outlined"
                    margin="dense"
                    className={classes.textField}
                    name="note"
                    onChange={this.handleChange}
                  />
                </Box>
              </Grid>
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
          <Divider light />
          <Grid item xs={12}>
            <Button
              className={classes.buttonSubmit}
              color="primary"
              onClick={(e) => this.handleSubmit(e)}
            >
              Xong
            </Button>
          </Grid>
        </Grid>
      </div>
    );

    return (
      <>
        <Button
          variant="contained"
          color="default"
          className={classes.button}
          onClick={this.handleOpen}
          startIcon={<AddIcon />}
        >
          Thêm liên hệ
        </Button>
        <Modal
          open={open}
          onClose={this.handleClose}
          className={classes.modal}
          aria-labelledby="insert-new-contact"
          aria-describedby="insert-new-contact"
        >
          {body}
        </Modal>
      </>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    addNewItem: (data_to_submit) => dispatch(addNewItem(data_to_submit)),
  };
};

const FormInsert = connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(_FormInsert));

export default FormInsert;
