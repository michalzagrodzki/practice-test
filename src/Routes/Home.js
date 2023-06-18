import { useState, useEffect } from 'react';
import practice from '../service/practice';
import Layout from './../components/common/layout';
import Body from '../components/home/body';
import Header from './../components/home/header';

function Home() {
  const [items, setItems] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  
  useEffect(() => {
    try {
      const response = practice.get();
      setItems(response);
    } catch(error) {
      setErrorMessage(error);
    }
  }, []);

  return (
    <main>
      <Layout>
        <Header />
        <Body 
          items={items} 
          error={errorMessage}
        >
        </Body>
      </Layout>
    </main>
  );
}

export default Home;
