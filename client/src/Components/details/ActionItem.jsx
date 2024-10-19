import { Box, Button, styled } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FlashOnIcon from '@mui/icons-material/FlashOn';

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import { useState } from "react";

const LeftContainer = styled(Box)`
    min-width: 10%;
    padding: 40px 0 0 80px;
`

const Image = styled('img')({
    padding: '15px'
})

const StyledButton = styled(Button)`
    width: 48%;
    height: 58px;
    border-radius: 2px;
`

const ActionItem = ({ product }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {id} = product;

    const [quantity, setQuantity] = useState(1);


    const addItemToCart = () => {
        dispatch(addToCart(id, quantity));
        navigate('/cart');

    }

    return (
        <LeftContainer>
            <Box style={{padding: '15px 20px', border: '1px solid #f0f0f0', width: '90%'}}>
                <Image src={product.detailUrl} />
            </Box>
            <StyledButton variant="contained" onClick={() => addItemToCart()} style={{ marginRight: 10, background: '#ff9f00', fontWeight:'600' }}> <ShoppingCartIcon /> Add to Cart</StyledButton>
            <StyledButton variant="contained" style={{ background: '#fb541b', fontWeight:'600' }}> <FlashOnIcon /> Buy Now</StyledButton>
        </LeftContainer>
    )
}

export default ActionItem;