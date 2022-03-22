import { Add, Remove } from '@mui/icons-material';
import Notice from '../components/Notice';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import { publicRequest } from '../requestMethods';
// import { addProduct } from '../redux/cartRedux';
// import { useDispatch } from 'react-redux';
import {
  Container,
  Wrapper,
  ImgContainer,
  Image,
  InfoContainer,
  Title,
  Desc,
  Price,
  FilterContainer,
  Filter,
  FilterTitle,
  FilterColor,
  FilterSize,
  FilterSizeOption,
  AddContainer,
  AmountContainer,
  Amount,
  Button,
} from '../styled/products/product-styled';

const Product = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const getProduct = async () => {
  //     try {
  //       const res = await publicRequest.get('/products/find/' + id);
  //       setProduct(res.data);
  //     } catch {}
  //   };
  //   getProduct();
  // }, [id]);

  const handleQuantity = (type) => {
    if (type === 'dec') {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  // const handleClick = () => {
  //   dispatch(addProduct({ ...product, quantity, color, size }));
  // };
  return (
    <Container>
      <Notice />
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src='https://res.cloudinary.com/dytnpjxrd/image/upload/v1647823611/MERN%20Ecommerce/summertime.jpg' />
          {/* <Image src={product.img} /> */}
        </ImgContainer>
        <InfoContainer>
          {/* <Title>{product.title}</Title> */}
          <Title>Title</Title>
          {/* <Desc>{product.desc}</Desc> */}
          <Desc>Description</Desc>
          {/* <Price>$ {product.price}</Price> */}
          <Price>$ 50.00</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              {product.color?.map((c) => (
                <FilterColor color={c} key={c} onClick={() => setColor(c)} />
              ))}
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize onChange={(e) => setSize(e.target.value)}>
                {product.size?.map((s) => (
                  <FilterSizeOption key={s}>{s}</FilterSizeOption>
                ))}
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove onClick={() => handleQuantity('dec')} />
              <Amount>{quantity}</Amount>
              <Add onClick={() => handleQuantity('inc')} />
            </AmountContainer>
            {/* <Button onClick={handleClick}>ADD TO CART</Button> */}
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
