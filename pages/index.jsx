

import Layout from '../components/Layout';
import { envIgniter } from '../igniters';

const Index = () => {
  return (
    <Layout>
      <div>Oi</div>
    </Layout>
  );
};

Index.getInitialProps = envIgniter;

export default Index;
