// https://www.motionlab.io/docs/Motionlab_logomanual.pdf
// https://mui.com/customization/default-theme/?expand-path=$.palette.primary
// TODO: Typography - font

const theme = {
    palette:{
        primary: {
            main: '#120123',    // Dark
            dark: '#050009',    // Gradiented Dark
            contrastText: '#FFF'
        },
        secondary: {
            main: '#FB8E83',    // Losos
            dark: '#EB594C',    // Gradiented Losos
            button: '#EF5350',
            contrastText: '#FFF'
        },
        text: {
            primary: '#FB8E83',
            secondary: '#120123',
            tertiary: '#FFF'

        },
        motionGray: {
            siva: '#CCC',           // Siva
            sivaDark: '#999'        // Dark Siva
        },
        background: {
            default: '#353132',     // used in: Adina Sign In
            darker: '#2a2a2a'       // used in: Adina Sign In
        }
    },
    // typography: {
    //     htmlFontSize: '14px'
    // },
    components: {
        MuiCssBaseline: {
          styleOverrides: {
            body: {                 // changes <Body> tag default style
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                fontSize: '14px',
                minHeight:"100vh"
            }
          }
        }
      }
};


const toastConfig = {
    duration: 3000,
    id: 'toast',
    style: {
        background: theme.palette.secondary.dark,
        color: theme.palette.secondary.contrastText,
        borderRadius: '20px'
    },
    position: "bottom-center",
}



// MUI components sx styling
const mainContainer = {
    margin: '10% 0 10% 0',
    padding: '2rem',
    position: 'relative',
    borderRadius: '10px',
    background: theme.palette.background.darker,
};

const buttonSx = {
    width: 'auto',
    margin: '2rem auto 3rem auto',
    borderRadius: '20px',
    background: theme.palette.secondary.button
};

const textFieldSx = {
    '& .MuiInputLabel-root': {
        color: 'text.tertiary',
        '&.Mui-focused': {
            color: 'text.tertiary'
        }
    },
    '& .MuiInput-root': {
        backgroundColor: "red",
        '&.Mui-focusVisible, &.Mui-selected': {
            color: 'text.tertiary'
        },
    },
    width: '300px',
    color: theme.palette.text.tertiary
};

const titleSx = {
    color: theme.palette.secondary.dark,
    margin: '24px 0',
    textAlign: 'center'
};

const subtitleSx = {
    color: theme.palette.secondary.dark
}

module.exports = {
    theme,
    toastConfig,
    mainContainer,
    buttonSx,
    textFieldSx,
    titleSx,
    subtitleSx
}