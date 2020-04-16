import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

export default function Header() {
    return (
        <React.Fragment>
            <div className="header-container">
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6">Light/Dark Theme</Typography>
                    </Toolbar>
                </AppBar>
            </div>
        </React.Fragment>
    );
}
