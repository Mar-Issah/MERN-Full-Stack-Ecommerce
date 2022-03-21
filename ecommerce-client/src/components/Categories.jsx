import { categories } from '../data';
import { Wrapper, Container, Image, Title, Info, Button } from '../styled/home/categories-styled';

const Categories = () => {
  return (
    <Wrapper>
      {categories.map((item) => (
        <Container key={item.id}>
          <a href={`/products/${item.cat}`}>
            <Image src={item.img} />
            <Info>
              <Title>{item.title}</Title>
              <Button>SHOP NOW</Button>
            </Info>
          </a>
        </Container>
      ))}
    </Wrapper>
  );
};

export default Categories;
