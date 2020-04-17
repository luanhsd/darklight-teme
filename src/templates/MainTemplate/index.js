import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../../styles'

export default function MainTemplate(props) {
    return (
        <React.Fragment>
            <ThemeProvider theme={props.theme}>
                <CssBaseline>
                    <GlobalStyle />
                    {props.children}
                </CssBaseline>
            </ThemeProvider>
        </React.Fragment>
    );
}
