
import React from 'react'
import styled from "styled-components";


const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`
const Title = styled.h3`
    font-size: 3.8rem;
    margin-bottom: 20px;

`
const Desc = styled.p`
    font-size: 1.6rem;
    font-weight: 500;
    margin-bottom: 20px;
    text-align: center;
    margin-left: 10rem;
    margin-right: 10rem;

`
const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid lightgray;
    margin-left: 10rem;
    margin-right: 10rem;
    
`
const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
    &:focus {
        outline: none;
    }
`
const Button = styled.button`
    flex: 1;
    border: none;
    background-color: #339999;
    color: #e6f2f2;
    font-weight: bold;
    cursor: pointer;
    &:focus {
        outline: none;
    }
`
const NewsLetter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Desc>Get timely updates from your favorite products.</Desc>
            <InputContainer>
                <Input placeholder="Your email" />
                <Button>
                    Subcribe
                </Button>
            </InputContainer>
        </Container>
    )
}

export default NewsLetter