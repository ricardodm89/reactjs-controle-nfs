import { NoEncryption } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";

export default makeStyles(theme => ({
  container: {
    boxShadow: theme.customShadows.widget,
    overflow: "hidden",
    paddingBottom: theme.spacing(2),
  },
  gridButton: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 40
  },
  button: {
    margin: 10
  },
  link: {
    textDecoration: 'none',
  }
}));
