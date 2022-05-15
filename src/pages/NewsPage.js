import Categories from '../components/Categories';
import NewsList from '../components/NewList';
import { useParams } from 'react-router-dom';

const NewsPage = () => {
  const params = useParams();
  const category = params.category || 'all';
  console.log(params);
  return (
    <>
      <Categories></Categories>
      <NewsList category={category}></NewsList>
    </>
  );
};

export default NewsPage;
