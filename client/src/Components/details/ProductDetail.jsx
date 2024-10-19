import { Box, styled, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const SmallText = styled(Box)`
    vertical-align: baseline;
    & > p {
        font-size: 14px;
        margin-top: 10px;
    }
`

const StyledBadge = styled(LocalOfferIcon)`
    margin-right: 10px;
    font-size: 18px;
`

const ColumnText = styled(TableRow)`
    font-size: 14px;
    vertical-align: baseline;

    & > td {
        font-size: 14px;
        margin-top: 10px;
        border: none
    }
`

const ProductDetail = ({ product }) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const date = new Date( new Date().getTime()+(5* 24 * 60 * 60 * 1000 ));
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
        return (
            <>
                <Typography>{product.title.longTitle}</Typography>
                <Typography style={{ marginTop: 5, color: '#878787', fontSize: 14 }}>
                    8 Ratings & 1 Reviews
                    <Box component="span"><img src={fassured} style={{ width: 77, marginLeft: 20 }} alt = "fassured"  /></Box>
                </Typography>
                <Typography>
                        <Box component='span' style={{ color: 'black', fontSize: 28 }}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                        <Box component='span' style={{ color: '#878787' }}><strike>{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                        <Box component='span' style={{ color: '#388E3C' }}>{product.price.discount} off</Box>
                </Typography>
                <Typography style={{fontSize: '16px', fontWeight: '600'}}>Available Offers</Typography>
                <SmallText>
                    <Typography> <StyledBadge style={{color: '#15be46'}}/> Bank Offer 5% Unlimited Cashback on Flipkart Axis Bank Credit CardT&C</Typography>
                    <Typography> <StyledBadge style={{color: '#15be46'}}/> Special PriceGet extra 13% off (price inclusive of cashback/coupon)T&C</Typography>
                    <Typography> <StyledBadge style={{color: '#15be46'}}/> Partner OfferMake a purchase and enjoy a surprise cashback/ coupon that you can redeem later!</Typography>
                    <Typography> <StyledBadge style={{color: '#15be46'}}/> No Cost EMI on Bajaj Finserv EMI Card on cart value above ₹2999</Typography>
                </SmallText>
                <Table>
                    <TableBody>
                        <ColumnText>
                            <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
                            <TableCell style={{ fontWeight: '600' }} >Delivery by {date.toDateString()} | ₹40  </TableCell>
                        </ColumnText>
                        <ColumnText>
                            <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
                            <TableCell style={{ fontWeight: '600' }}> No Warranty </TableCell>
                        </ColumnText>
                        <ColumnText>
                            <TableCell style={{ color: '#878787' }}>Seller</TableCell>
                            <TableCell > 
                                <Box component="span" style={{ color: '#2874f0' }}>SuperComNet</Box>
                                <Typography>GST invoice available</Typography>
                                <Typography>View more sellers starting from ₹{product.price.cost} </Typography>
                            </TableCell>
                            </ColumnText>
                            <ColumnText>
                            <TableCell colSpan={2}>
                                <img src={adURL} alt="ad" style={{ width: 390 }}/>
                            </TableCell>
                        </ColumnText>
                        <ColumnText>
                            <TableCell style={{ color: '#878787' }}>Description</TableCell>
                            <TableCell > {product.description} </TableCell>
                        </ColumnText>
                    </TableBody>
                </Table>
            </>

        )

}

export default ProductDetail;