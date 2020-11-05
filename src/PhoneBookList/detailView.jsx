import { List, ListItemText } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import React, { Component } from "react";
import { connect } from "react-redux";

const styles = {
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  listItemLabel: {
    fontSize: "1.5em",
    color: "rgba(0, 0, 0, 0.6)",
  },
  listItemContent: {
    fontSize: "2em",
  },
  tableCellLabel: {
    borderBottom: "none",
    paddingBottom: 0,
    fontSize: "1.1em",
    color: "rgba(0, 0, 0, 0.6)",
  },
  tableCellContent: {
    borderBottom: "none",
    paddingBottom: 0,
    fontSize: "1.1em",
  },
  avatar: {
    height: "90px",
    width: "90px",
  },
};

const createData = (label, content) => {
  return {
    label,
    content,
  };
};

const rows = [
  createData("Di động", "3646"),
  createData("Công việc", "6364"),
  createData("Iphone", "42636"),
];
class _ItemDetailCard extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.index !== nextProps.index) return true;
    else return false;
  }

  componentDidUpdate() {}

  render() {
    const { classes, index, data } = this.props;

    // Render the chosen item
    const chosenItem = data[index];

    // Those data are used to map the chosenItem to table cell
    const createData = (label, content) => {
      return {
        label,
        content,
      };
    };

    const rows = [
      createData("Di động", chosenItem.mobile),
      createData("Công việc", chosenItem.work),
      createData("Iphone", chosenItem.iphone),
    ];

    return (
      <Grid container>
        <Grid item xs={12} className={classes.root}>
          <Grid container>
            <Grid item xs={2}>
              <Avatar
                alt="name"
                src={chosenItem.avatar}
                className={classes.avatar}
              />
            </Grid>
            <Grid item xs={10}>
              <h2>{chosenItem.name}</h2>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <List>
              <ListItemText>
                <TableBody>
                  {rows.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell
                        component="th"
                        scope="row"
                        className={classes.tableCellLabel}
                      >
                        {row.label}
                      </TableCell>

                      <TableCell
                        align="left"
                        className={classes.tableCellContent}
                      >
                        {row.content}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </ListItemText>
            </List>
          </Grid>
        </Grid>
        <Divider />
        <Grid item xs={12}>
          <Grid container>
            <TableBody>
              <TableRow>
                <TableCell
                  component="th"
                  scope="row"
                  className={classes.tableCellLabel}
                >
                  Ghi chú
                </TableCell>

                <TableCell align="left" className={classes.tableCellContent}>
                  {chosenItem.note}
                </TableCell>
              </TableRow>
            </TableBody>
          </Grid>
        </Grid>
        <Divider />
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  const { key, data } = state;
  return {
    index: key,
    data,
  };
};

const ItemDetailCard = connect(
  mapStateToProps,
  null
)(withStyles(styles)(_ItemDetailCard));

export default ItemDetailCard;
