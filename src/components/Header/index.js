import React from 'react'
import { AppBar, Typography, IconButton } from '@material-ui/core'
import Brightness from '@material-ui/icons/Brightness4';
import { ToolbarStyled } from './styles'

export default function Header(props) {

    return (
        <React.Fragment>
            <div className="header-container">
                <AppBar position="static">
                    <ToolbarStyled className="header-toolbar">
                        <Typography variant="h6">Light/Dark Theme</Typography>
                        <IconButton onClick={props.setTheme}>
                            <Brightness style={{ color: '#fff' }} />
                        </IconButton>
                    </ToolbarStyled>
                </AppBar>
            </div>
        </React.Fragment>
    );
}
