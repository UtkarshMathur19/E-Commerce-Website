import { useState, useContext } from 'react';

import { DataContext } from '../../context/DataProvider';

// import { Link } from 'react-router-dom';


import { Box, Button, Typography, styled } from '@mui/material';
import { ShoppingCart } from '@mui/icons-material';

//components
import LoginDialog from '../login/LoginDialog';
import Profile from './Profile';



const LoginButton = styled(Button)`
    color: #2874f0;
    background: #fff;
    text-transform: none;
    padding: 5px, 40px;
    border-radius: 2px;
    box-shadow: none;
    font-weight: 600;
    height: 32px;
`

const Wrapper = styled(Box)(({ theme }) => ({
    margin: '0 3% 0 auto',
    display: 'flex',
    '& > *': {
        marginRight: '40px !important',
        textDecoration: 'none',
        color: '#FFFFFF',
        fontSize: 12,
        alignItems: 'center',
        [theme.breakpoints.down('sm')]: {
            color: '#2874f0',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
            marginTop: 10
        }
    },
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));

const Container = styled(Box)(({ theme }) => ({
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));

const CustomButtons = () => {
    const [open, setOpen] = useState(false);

    const { account, setAccount } = useContext(DataContext);
    const openDialog = () => {
        setOpen(true);
    }
    return (
        <Wrapper>
            {
                account ? <Profile account = { account } setAccount = {setAccount} /> :
                    <LoginButton style={{ marginTop: 9 }} variant='contained' onClick= {() => openDialog()}>Login</LoginButton>
            }
            
            <Typography style={{ marginTop: 9, width: 135 }}>Become a Seller</Typography>
            <Typography style={{ marginTop: 9 }}>More</Typography>

            

            <Container style={{ marginTop: 9 }}>
                <ShoppingCart />
                <Typography>Cart</Typography>
            </Container>
            <LoginDialog open={open} setOpen={setOpen} />
        </Wrapper>
    )
}

export default CustomButtons;