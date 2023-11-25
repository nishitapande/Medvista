import React from 'react'
import styled from "styled-components";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
const Container = styled.div`
    height: 7rem;
    background-color: teal;
    position: sticky;
    top: 0;
    z-index: 999;
`
const Navbar = styled.div`
    margin: 0 11rem;
    ${'' /* background-color: red; */}
    height: 100%;
    display: flex;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`
const Logo = styled.h1`
    font-size: 2.8rem;
    font-weight: 500;
    color: #fff;
`
const Span = styled.span`
    font-weight: 600;
    font-size: 3rem;
    padding-right: 0.01rem;
    color:#fff;
`
const Center = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`
const List = styled.ul`
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
    padding: 0;
    margin: 0;
    color: #fff;
`
const ListItem = styled.li`
    margin-right: 3rem;
    font-size: 1.6rem;
    font-weight: 500;
    cursor: pointer;
    &:hover{
        color: #ff8c00;
    }
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 3rem;
`
const MenuItem = styled.div`
    font-size: 1.6rem;
    font-weight: 500;
    cursor: pointer;
    color: #fff;
    &:hover{
        color: #ff8c00;
    }
`
const Badge = styled.div`
    color: #fff;
    cursor: pointer;
    font-size: 2rem;
    &:hover{
        color: #ff8c00;
    }
`
const NavBar = () => {
    return (
        <Container>
            <Navbar>
                <Left>
                    <Logo><Span>M</Span>edVista</Logo>
                </Left>
                <Center>
                    <List>
                        <ListItem>HOME</ListItem>
                        <ListItem>FEATURED</ListItem>
                        <ListItem>NEW</ListItem>
                        <ListItem>CONTACT</ListItem>
                    </List>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge>
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                    </MenuItem>
                </Right>
            </Navbar>
        </Container>
    )
}

export default NavBar