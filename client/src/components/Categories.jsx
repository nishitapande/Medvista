import React from 'react'
import styled from "styled-components";
import CategoryItem from './CategoryItem';
import { categories } from '../data';

const Container = styled.div`
    margin: 0 11rem;

`
const Wrapper = styled.div`
    display: flex;
    background-color: #f5fbfd;
    justify-content: space-evenly;
    flex-wrap: wrap;
    width: 80rem;
    height: 35rem;
    align-items: center;
    gap: 2rem;  
`
const Title = styled.h1`
    font-size: 3.7rem;
    margin-top: 4rem;
`
const Categories = () => {
    return (
        <Container>
            <Title>Shop by Categories</Title>
            <Wrapper>
                {categories.map((item) => (
                    <CategoryItem item={item} key={item.id} />
                ))}
            </Wrapper>
        </Container>
    )
}

export default Categories