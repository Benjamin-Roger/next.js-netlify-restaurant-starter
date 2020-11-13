import { createMuiTheme } from '@material-ui/core/styles';
import {colors} from './colorScheme'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.primary.main,
    },
    secondary: {
      main: colors.secondary.main,
    },
  },
});

export default theme;