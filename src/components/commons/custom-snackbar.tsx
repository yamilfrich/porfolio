import React, { SyntheticEvent } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import { amber, green } from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import { makeStyles, Theme } from "@material-ui/core/styles";
import {
  MdCheckCircle,
  MdWarning,
  MdError,
  MdInfo,
  MdClose
} from "react-icons/md";

/* https://material-ui.com/components/snackbars/ */

const variantIcon = {
  success: MdCheckCircle,
  warning: MdWarning,
  error: MdError,
  info: MdInfo
};

const useStyles = makeStyles((theme: Theme) => ({
  success: {
    backgroundColor: green[600]
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  info: {
    backgroundColor: theme.palette.primary.main
  },
  warning: {
    backgroundColor: amber[700]
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    fontSize: 20,
    opacity: 0.9,
    marginRight: theme.spacing(1)
  },
  message: {
    display: "flex",
    alignItems: "center"
  }
}));

interface IProps {
  message: string | null;
  type: "success" | "warning" | "error" | "info";
}

const CustomSnackbar = ({ message, type }: IProps) => {
  const classes = useStyles();
  const Icon = variantIcon[type];
  const [open, setOpen] = React.useState(true);

  const handleClose = (event?: SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      open={open}
      onClose={handleClose}
      autoHideDuration={6000}
    >
      <SnackbarContent
        className={classes[type]}
        aria-describedby="client-snackbar"
        message={
          <span id="client-snackbar" className={classes.message}>
            <Icon className={classes.iconVariant} />
            {message}
          </span>
        }
        action={[
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <MdClose className={classes.icon} />
          </IconButton>
        ]}
      />
    </Snackbar>
  );
};

export default CustomSnackbar;
