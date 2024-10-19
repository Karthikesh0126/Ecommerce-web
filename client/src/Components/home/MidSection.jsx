import {  Grid, styled } from "@mui/material";

import { imageURL } from "../../constants/data.js";

const Wrapper = styled(Grid)`
    margin-top: 10px;
    justify-content: space-between;
`

const Image = styled('img')(({theme}) => ({ 
    marginTop: 10,
    width: '100%',
    display: 'flex',
    justifyContent: "space-between",
    [theme.breakpoints.down('md')]: {
        objectFit: 'cover',
        height: '130px'
    }
}));

const MidSection = () => {

    const url = 'https://rukminim2.flixcart.com/fk-p-flap/1000/170/image/573ddfead1100e04.jpg?q=20';
    return (
        <>
            <Wrapper lg ={12} sm={12} md= {12} xs={12} container>
                {
                    imageURL.map(image => (
                        <Grid item lg ={4} sm={4} md= {12} xs={12}>
                            <img src={image} alt="img" style={{width: '100%'}}/>
                        </Grid>
                    ))
                }
            </Wrapper>
            <Image src={url} alt="BSU" />
        </>
    )
}

export default MidSection;