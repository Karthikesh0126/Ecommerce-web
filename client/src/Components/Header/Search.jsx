import { useEffect, useState } from "react";

import { InputBase, Box, styled, List, ListItem } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";
import { Link } from "react-router-dom";



const SearchContainer = styled(Box)`
    background: #f1f4ff;
    width: 50%;
    height: 62%;
    border-radius: 8px;
    margin-left: 45px;
    display: flex;
    
    
`

const InputSearchBase = styled(InputBase)`
    padding-left: 20px;
    width: 100%;
    font-color: black;
   
`
const SearchIconWrapper = styled(Box)`
    color: black;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    
`

const ListWrapper = styled(List)`
    position: absolute;
    background: #FFFFFF;
    color: black;
    margin-top: 45px;
    width: 48.3%;
`


const Search = () => {
    const [text, setText] = useState('');

    const { products } = useSelector(state => state.getProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

        const getText = (text) => {
            setText(text);
        }
    return (
            <SearchContainer>
             <InputSearchBase 
                placeholder="Search for Products, Brands and More"
                onChange={(e) => getText(e.target.value)}
                value={text}
             />
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
           
                {
                    text &&
                        <ListWrapper>
                            {
                                products.filter(product => product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product => (
                                    <ListItem>
                                        <Link
                                            to={`/product/${product.id}`}
                                            onClick={() => setText(``)}
                                            style={{textDecoration: 'none', color: 'inherit'}}
                                        >
                                        {product.title.longTitle}
                                        </Link>
                                    </ListItem>
                                ))
                            }
                        </ListWrapper>
                }
            </SearchContainer>
        )
    }
export default Search;