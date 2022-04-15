import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { popularProducts } from '../data';
import ProductCard from './ProductCard';
import axios from 'axios';

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

//this component keeps changing based on cat, filters, sort,products in use effects

//axios:if no cat then get all products, this way the homepage can render all products

//2nd useEffects: cat(to filter you should be on the productlist(cat component))

//returning an array of products based on filter.obj.entries return an array of key, value pair, On every (accepts a fxn)key-value pair,return product if the product array key field includes the value

const Products = ({ cat, filters, sort }) => {
  // console.log(cat, filters, sort);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(cat ? `${process.env.REACT_APP_SERVER}/products?category=${cat}` : `${process.env.REACT_APP_SERVER}/products`);
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, [cat]);

  //console.log(products);

  //we are on the productList with cat route param

  useEffect(() => {
    cat && setFilteredProducts(products.filter((item) => Object.entries(filters).every(([key, value]) => item[key].includes(value))));
  }, [products, cat, filters]);

  //using the sort fxn on createdAt, and price filed of the product
  useEffect(() => {
    if (sort === 'newest') {
      setFilteredProducts((prev) => [...prev].sort((a, b) => a.createdAt - b.createdAt));
    } else if (sort === 'asc') {
      setFilteredProducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setFilteredProducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  //this way the homapge without filter can display products()first 8
  return <Container>{cat ? filteredProducts.map((item, idx) => <ProductCard item={item} key={idx} />) : products.slice(0, 8).map((item, idx) => <ProductCard item={item} key={idx} />)}</Container>;
};

export default Products;
