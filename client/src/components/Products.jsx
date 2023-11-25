import React from 'react'
import styled from "styled-components";
import Product from './Product';
import { popularProducts } from '../data';

const Conatiner = styled.div`
    margin: 2rem 11rem;
    margin-top: 7rem;
    margin-bottom: 4rem;
    background-color: #e6f2f2;

`
const Title = styled.h2`
    font-size: 3.5rem;
    font-weight: 600;
    padding-top: 5rem;
`
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    flex-wrap: wrap;
    gap: 1.5rem;
`
const Products = () => {
    return (
        <div style={{backgroundColor: `#e6f2f2`}}>


            <Conatiner>
                <Title>Shop Popular Products</Title>
                <Wrapper>
                    {popularProducts.map((item) => (
                        <Product item={item} key={item.id} />
                    ))}
                </Wrapper>

            </Conatiner>
        </div>

    )
}

export default Products