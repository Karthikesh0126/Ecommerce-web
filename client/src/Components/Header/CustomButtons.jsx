import { useState, useContext } from "react";
import { Box, Button, styled, Typography } from "@mui/material";
import AccountCircle from '@mui/icons-material/AccountCircleOutlined';
import ShoppingCart from '@mui/icons-material/ShoppingCartOutlined';
import Storefront from '@mui/icons-material/Storefront';
import { DataContext } from "../../context/DataProvider";

//components
import LoginDialog from "../login/LoginDialog";
import Profile from "./Profile";

const Wrapped = styled(Box)`
    display: flex;
    align-items: center;
    color: black;
    margin: 0 3% 0 auto;
    & > button, & > p, & > div{
    margin-right: 30px;
    }

`;

const LoginButton = styled(Button)`
    display: flex;
    text-Transform: none;
    background-Color: #fffefe;
    color: black;
    box-shadow: none;
`;

const Container = styled(Box) `
    display: flex;
`;
const ContainerB = styled(Box)`
    display:flex;
`;



const CustomButtons = () => {

    const [open, setOpen] = useState(false);
    
    const { account, setAccount } = useContext(DataContext);

    const openDialog = () => {
        setOpen(true);
    }

    return (
        <Wrapped>
            {
                account ? <Profile account={account} setAccount={setAccount}/>:
                <LoginButton variant="contained" onClick={() => openDialog()}> <AccountCircle/> Login</LoginButton>

            }
                
            <Container>
                <ShoppingCart />
                <Typography style={{width: 50}}>Cart</Typography>
            </Container>
            
            
            <ContainerB>
                <Storefront />
                <Typography style={{ marginBottom:5 , width: 140}}>Become a Seller</Typography>
            </ContainerB>
            
            <LoginDialog open={open} setOpen={setOpen}/>
           


        </Wrapped>
        
    )
}

export default CustomButtons;