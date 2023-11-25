import React from 'react'
import styled from "styled-components";

const Container = styled.div`
    flex: 1;
    margin: 3px;
    width:2rem;
    position: relative;
    border: 0.1px solid #b3b3b3;
    border-radius: 15px;
    cursor: pointer;
`
const ImageContainer = styled.div`
    width: 100%;
    height: 30rem;
    overflow: hidden;

`
const Image = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 15px;
`
const InfoContainer = styled.div`
    position: absolute;
    top: 10;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`
const Title = styled.h1`
    color: black;
    margin-bottom: 20px;
    text-transform: uppercase;
    font-weight: 600;

`

const CategoryItem = ({ item }) => {
    return (
        <Container>
            
            <ImageContainer>
                <Image src={item.img} />
            </ImageContainer>
                <InfoContainer>
                    <Title> {item.title} </Title>
                </InfoContainer>
        </Container>
    )
}

export default CategoryItem