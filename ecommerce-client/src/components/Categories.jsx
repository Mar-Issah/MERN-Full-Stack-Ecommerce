import { categories } from '../data';
import CategoryItem from './CategoryItem';
import { Container } from '../styled/home/categories-styled';

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
