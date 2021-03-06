import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Container, Title, FilterContainer, Filter, FilterText, Option, Select } from '../styled/products/productList-styled';
import Navbar from '../components/Navbar';
import Notice from '../components/Notice';
import Footer from '../components/Footer';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';

//products component render all of the products to tell it waht product to render pass in cat/sort/filter as props

//this fxn set filters for color and size pass in the name(e. target.name)attribute in jsx to tell the function which of the filters to set

//filters{color:red, size:md}

const ProductList = () => {
  const location = useLocation(); //useParams
  const cat = location.pathname.split('/')[2].toLowerCase();
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState('newest');

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
      ...filters,
      [e.target.name]: value,
    });
  };

  return (
    <Container>
      <Notice />
      <Navbar />
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name='color' onChange={handleFilters}>
            <Option disabled>Color</Option>
            <Option>white</Option>
            <Option>black</Option>
            <Option>red</Option>
            <Option>blue</Option>
            <Option>yellow</Option>
            <Option>green</Option>
          </Select>
          <Select name='size' onChange={handleFilters}>
            <Option disabled>Size</Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={(e) => setSort(e.target.value)}>
            <Option value='newest'>Newest</Option>
            <Option value='asc'>Price (asc)</Option>
            <Option value='desc'>Price (desc)</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Products cat={cat} filters={filters} sort={sort} />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ProductList;
