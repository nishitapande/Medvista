import React, {useState} from 'react'
import styled from "styled-components";
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import NewsLetter from '../components/NewsLetter';

const Container = styled.div`
    overflow: hidden;
`
const Wrapper = styled.div`
    margin: 0 11rem;
    display: flex;
    flex-direction: column;
    ${'' /* background-color: #b3d9d9; */}
`
const TopContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2rem;
`
const ImageContainer = styled.div`
    flex: 1;
    width: 30rem;
    height: 30rem;
    object-fit: cover;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
`
const InfoContainer = styled.div`
    flex: 1;
    width: 30rem;
`
const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: 700;
    margin-left: 1rem;
`
const Text = styled.p`
    margin-left: 1rem;
    font-size: 1rem;
    ${'' /* color: ${(props) => props.color}; */}
    color: red;
`
const ProductHighlights = styled.div`
    margin-left: 1rem;
`
const Heading = styled.h2`
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;

`
const List = styled.ul``
const ListItem = styled.li`
    margin-bottom: 0.5rem;
    font-size: 1.6rem;
`
const ShoppingContainer = styled.div`
    flex: 1;
`
const Shopping = styled.div``
const Announcement = styled.h2``

const Labal = styled.label`
    font-size: 3rem;
    font-weight: 500;
`
const Input = styled.input`
    margin-right: 1rem;
    cursor: pointer;
    width: 2.5rem;
    height: 2.5rem;
`
const PriceOption = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 1rem;
`
const PriceOptions = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
    justify-content: center;
`
const Select = styled.select``
const Option = styled.option``
const BottomContainer = styled.div`

`
const ProductDetailPage = () => {
    return (
        <>
            <NavBar />
            <Container>
                <Wrapper>
                    <TopContainer>
                        <ImageContainer>
                            <Image src='https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1730&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
                        </ImageContainer>
                        <InfoContainer>
                            <Title>
                                Tata 1mg Tejasya Shilajit Capsule 500mg
                            </Title>
                            <Text>
                                Tata 1mg Healthcare Solutions Private Limited
                            </Text>
                            <ProductHighlights>
                                <Heading>
                                    Product Highlights
                                </Heading>
                                <List>
                                    <ListItem>It can improve vigour and vitality</ListItem>
                                    <ListItem>It may support stamina</ListItem>
                                    <ListItem>It can help reduce fatigue</ListItem>
                                    <ListItem>It contains 500mg of shilajit pure herb</ListItem>
                                    <ListItem>It may help in improving testosterone level</ListItem>
                                </List>
                            </ProductHighlights>
                        </InfoContainer>
                        <ShoppingContainer>
                            <Shopping>
                                <Announcement>1,919 people bought this recently</Announcement>
                            </Shopping>
                            <PriceOption>
                                <PriceOptions>
                                    <Input type="radio"></Input>
                                    <Labal>Rs 250</Labal>
                                </PriceOptions>
                                <PriceOptions>
                                    <Input type="radio"></Input>
                                    <Labal>Rs 250 + Free Shipping
                                    </Labal>
                                </PriceOptions>

                            </PriceOption>
                        </ShoppingContainer>
                    </TopContainer>
                    <BottomContainer>
                        Bottom
                    </BottomContainer>
                </Wrapper>
            </Container>
            <NewsLetter />
            <Footer />
        </>
    )
}

export default ProductDetailPage