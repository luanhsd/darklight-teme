import React from 'react'
import { AppBar, Typography, IconButton } from '@material-ui/core'
import Night from '@material-ui/icons/Brightness3';
import Day from '@material-ui/icons/Brightness5'
import { ToolbarStyled } from './styles'

export default function Header(props) {

    function setIcons(theme) {
        if (theme === 'dark') {
            return <Night style={{ color: '#fff' }} />
        } else {
            return <Day style={{ color: '#fff' }} />
        }
    }

    return (
        <React.Fragment>
            <div className="header-container">
                <AppBar position="static">
                    <ToolbarStyled className="header-toolbar">
                        <Typography variant="h6">Light/Dark Theme</Typography>
                        <IconButton onClick={props.setTheme}>
                            {setIcons(props.Icon)}
                        </IconButton>
                    </ToolbarStyled>
                </AppBar>
            </div>
        </React.Fragment>
    );
}
