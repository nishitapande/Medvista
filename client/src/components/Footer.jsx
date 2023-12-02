import React from 'react'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import styled from "styled-components";

const Container = styled.div`
  display: flex;
    margin: 0 11rem;
    gap: 2rem;
    justify-content: space-between;
    align-items: flex-start;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;

`;

const Logo = styled.h1`
    align-self: flex-start; 
`;

const Description = styled.p`
  margin: 20px 0px;
    font-size: 1.4rem;  
    font-weight: 500;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  margin-left: 10rem;
`;

const Title = styled.h3`
  margin-bottom: 30px;
  font-size: 2rem;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  font-size: 1.4rem;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
margin-left: 10rem;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>MedVista</Logo>
                <Description>
                    There are many variations of passages of Lorem Ipsum available, but
                    the majority have suffered alteration in some form, by injected
                    humour, or randomised words which don’t look even slightly believable.
                </Description>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <FacebookOutlinedIcon />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <InstagramIcon />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <TwitterIcon />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <PinterestIcon />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    {/* <Room style={{ marginRight: "10px" }} /> 622 Dixie Path , South Tobinchester 98336 */}

                </ContactItem>
                <ContactItem>
                    {/* <Phone style={{ marginRight: "10px" }} /> +1 234 56 78 */}
                </ContactItem>
                <ContactItem>
                    {/* <MailOutline style={{ marginRight: "10px" }} /> contact@lama.dev */}
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container >
    )
}

export default Footer