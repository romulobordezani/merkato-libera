import { useRouter } from 'next/router';
import fetch from 'isomorphic-unfetch';
import Layout from '../../components/Layout/Layout.js';

const ItemShowRoom = props => {
  const router = useRouter();

  return (
    <Layout>
      <h1>{props.item.title}</h1>
      <p>{router.query.id}</p>
      <p>${props.item.price}</p>
    </Layout>
  )
};

ItemShowRoom.getInitialProps = async function(context) {
    const { id } = context.query;
    const res = await fetch(`/api/items/${id}`);
    const item = await res.json();

    console.log(`Fetched show: ${item.id}`);

    return { item };
};

export default ItemShowRoom;
