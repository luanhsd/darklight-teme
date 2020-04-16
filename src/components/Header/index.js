import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'
import Brightness from '@material-ui/icons/Brightness4';

export default function Header() {
    const [theme, setTheme] = useState({ mode: 'light' })

    return (
        <React.Fragment>
            <div className="header-container">
                <AppBar position="static">
                    <Toolbar className="header-toolbar">
                        <Typography variant="h6">Light/Dark Theme</Typography>
                        <IconButton>
                            <Brightness style={{ color: '#fff' }} />
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </div>
        </React.Fragment>
    );
}
