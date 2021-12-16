import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ChatIcon from '@mui/icons-material/Chat';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import React, { useEffect, useState } from 'react';
import '../sass/app.scss';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from "firebase/database";
import configFirebase from '../config/firebase'
import MenuIcon from '@mui/icons-material/Menu';
import { useHistory, Redirect } from "react-router-dom";
import { logout, getUserLogged } from '../services/auth'

import { useSelector, useDispatch } from 'react-redux'
import { setLogged } from '../store/states/user'

const app = initializeApp(configFirebase);
const database = getDatabase(app);


function App() {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const logged = useSelector((state) => state.user.logged)
    const dispatch = useDispatch()

    //const count = useSelector((state) => state.counter.value)
    let history = useHistory();

    const disconect = () => {
        logout().then(async () => {
            await history.push("/");
            await dispatch(setLogged(false))
        }).catch((error) => {
            console.log(error)
        })
    }

    const actions = [
        { icon: <LogoutIcon onClick={disconect} />, name: 'Sair' },
        { icon: <SettingsIcon />, name: 'Configurações' },
        { icon: <ChatIcon />, name: 'Conversas' },
    ]
    /*
    const criarDados = () => {
        set(ref(database, 'grupos/' + 45646), {
            name: 'só os boys'
        }).then(_ => alert('tudo feito'))
    }
    */

    useEffect(() => {
        console.log(logged)

        return () => {
            
        }
    }, [])

    return (
        <div className="App vh-100">
            { !logged 
                ? <Redirect to="/" />
                :<>
                    <List sx={{ width: '100%', maxWidth: 360, color: 'white' }}>
                        <ListItem alignItems="flex-start" sx={{ backgroundColor: '#0d0d0d' }}>
                            <ListItemAvatar>
                                <Avatar alt="Remy Sharp" src="/images/group.png" />
                            </ListItemAvatar>
                            <ListItemText
                                primary="Brunch this weekend?"
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Travis Howard" src="/images/group.png" />
                            </ListItemAvatar>
                            <ListItemText
                                primary="Brunch this weekend?"
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt="Cindy Baker" src="/images/group.png" />
                            </ListItemAvatar>
                            <ListItemText
                                primary="Brunch this weekend?"
                            />
                        </ListItem>
                    </List>
                    
                    <Box sx={{transform: 'translateZ(0px)', flexGrow: 1, position: 'relative', top: '60%' }}>
                        <Backdrop open={open} />
                            <SpeedDial
                                ariaLabel="SpeedDial tooltip example"
                                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                                icon={<MenuIcon />}
                                onClose={handleClose}
                                onOpen={handleOpen}
                                open={open}
                            >
                            {actions.map((action) => (
                                <SpeedDialAction
                                    key={action.name}
                                    icon={action.icon}
                                    tooltipTitle={action.name}
                                    tooltipOpen
                                    onClick={handleClose}
                                />
                            ))}
                        </SpeedDial>
                    </Box>
                </>
            }
        </div>
    );
}

export default App;
