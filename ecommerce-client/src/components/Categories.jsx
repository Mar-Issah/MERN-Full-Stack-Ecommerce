import { categories } from '../data';
import { Wrapper, Container, Image, Title, Info, Button } from '../styled/home/categories-styled';
import { Link } from 'react-router-dom';

//user clicks on each catgory card it take user to the `/products/${item.cat} route created. path params

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <Wrapper key={item.id}>
          <Link href={`/products/${item.cat}`}>
            <Image src={item.img} />
            <Info>
              <Title>{item.title}</Title>
              <Button>SHOP NOW</Button>
            </Info>
          </Link>
        </Wrapper>
      ))}
    </Container>
  );
};

export default Categories;
