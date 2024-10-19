

import { AppBar, Toolbar, Box, styled,  } from '@mui/material';

// components
import Search from './Search';
import CustomButtons from './CustomButtons';

import { Link } from 'react-router-dom';

const StyledHeader = styled(AppBar)`
    background: #fffefe;
    height: 65px;
  
`




const CustomButtonWrapper = styled(Box)(({ theme }) => ({
    margin: '0 5% 0 auto',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));
    

const Header = () => {

    const logoURL = 'https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg'

    return (
    <StyledHeader>
        <Toolbar>
            <Link to={`/`}>
            <Box>
                <img src= {logoURL} alt = "logo" />
            </Box>
            </Link>
            <Search />
            <CustomButtonWrapper>
                <CustomButtons />
            </CustomButtonWrapper>
        </Toolbar>
    </StyledHeader>
)
}

export default Header;