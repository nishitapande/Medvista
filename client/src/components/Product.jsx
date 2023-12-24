import React from 'react'
import styled from "styled-components";

const Conatiner = styled.div`
    flex: 1;
    display: flex;
    border: 0.1px solid transparent;
    flex-direction: column;
    height: 37rem;
    width: 15rem;
    cursor: pointer;
    background-color: white;
    margin-bottom: 4rem;
    ${'' /* margin: 2rem 1rem;
    padding:2rem; */}
    border-radius:1.5rem;
    transition: all 0.3s ease-in;

    &:hover{
        border: 0.1px solid lightgray;
        transform: scale(1.05);
        // border-radius: 1.5rem;

    }
`
const ImageContainer = styled.div`
    flex: 2;
    height: 30rem;
    width: 15rem;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit:  cover;
`
const InfoConatiner = styled.div`
    flex: 1;
    margin-left: 1rem;
`
const Title = styled.h3`
font-size: 1.7rem;
font-weight: 400;

`
const Description = styled.p`
    font-size: 1.2rem;
    font-weight: 500;
`
const Price = styled.span`
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
`

const Product = ({ item }) => {
    return (
        
        <Conatiner>
            <ImageContainer>
                <Image src={item.img} />
            </ImageContainer>
            <InfoConatiner>
                <Title> Carbamide Forte Multi Collagen Complex Type + Piperine </Title>
                <Description> Bottle of 90 tablets </Description>
                <Price>MRP: 800</Price>
            </InfoConatiner>
        </Conatiner>
    )
}

export default Product