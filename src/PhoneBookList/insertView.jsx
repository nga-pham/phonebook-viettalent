import React, { Component } from "react";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import Popover from "@material-ui/core/Popover";

const styles = (theme) => {
  return {
    button: {
      marginTop: theme.spacing(6),
    },
  };
};

class _FormInsert extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Button
        variant="contained"
        color="default"
        className={classes.button}
        startIcon={<AddIcon />}
      >
        Thêm liên hệ
      </Button>
    );
  }
}

const mapStateToProps = (state) => {
  const { key, data } = state;
  return {
    // key,
    key: 1,
    data,
  };
};

const FormInsert = connect(
  mapStateToProps,
  null
)(withStyles(styles)(_FormInsert));

export default FormInsert;
