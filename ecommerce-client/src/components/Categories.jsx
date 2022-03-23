import { categories } from '../data';
import { Wrapper, Container, Image, Title, Info, Button } from '../styled/home/categories-styled';

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <Wrapper key={item.id}>
          <a href={`/products/${item.cat}`}>
            <Image src={item.img} />
            <Info>
              <Title>{item.title}</Title>
              <Button>SHOP NOW</Button>
            </Info>
          </a>
        </Wrapper>
      ))}
    </Container>
  );
};

export default Categories;
