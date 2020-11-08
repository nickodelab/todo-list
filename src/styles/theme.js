
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'
import mixins from './mixins'

const RalewayUrl = 'https://fonts.googleapis.com/css?family=Raleway:300,400,500,700&display=swap'

const raleway = {
  fontFamily: 'Raleway, Roboto, sans-serif',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `url(${RalewayUrl})`
}

const materialUITheme = createMuiTheme({
  palette: {
    primary: {
      main: '#00897b'
    },
    background: {
      default: '#f3f2ef',
      input: "#eef3f8"
    }
  },
  typography: {
    h1: {
      fontSize: '3rem',
      marginBottom: '1rem',
    },
    fontFamily: [
      'Raleway',
      '-apple-system',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(',')
  },
  mixins,
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [raleway],
      },
    },
  }
})

const themeOptions = {
  breakpoints: ['sm', 'md', 'lg']
}

export const theme = responsiveFontSizes(materialUITheme, themeOptions)