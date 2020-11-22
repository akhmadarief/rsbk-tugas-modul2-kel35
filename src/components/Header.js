import React from 'react';
import '../App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '../elements/Button';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <div class="column">
                    <h2>Kelompok 35</h2>
                </div>
                <div class="column">
                    <Button border="yellow">Link</Button>
                    <Button border="yellow">Link</Button>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Header;
