import Head from 'next/head';
import App from '../src/container/App';
// import 'tachyons';
const Index = () => (
  <div>
    <Head>
      <link href="/static/Index.css" rel="stylesheet" />
      <link href="/static/tachyons.css" rel="stylesheet" />
    </Head>
    <App />
  </div>
);

export default Index;
