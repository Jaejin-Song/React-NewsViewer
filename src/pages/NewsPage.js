import Categories from '../components/Categories';
import NewsList from '../components/NewList';
import { useParams } from 'react-router-dom';

const NewsPage = ({ match }) => {
  const params = useParams();
  const category = params.category || 'all';

  return (
    <>
      <Categories></Categories>
      <NewsList category={category}></NewsList>
    </>
  );
};

export default NewsPage;
