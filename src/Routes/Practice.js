import { useState, useEffect } from 'react';
import practice from '../service/practice';
import Layout from '../components/common/layout';
import Body from '../components/practice/body';

function Practice() {
  const [item, setItem] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  useEffect(() => {
    try {
      const response = practice.single({"id":"1"});
      setItem(response);
    } catch(error) {
      setErrorMessage(error);
    }
  }, []);
  
  return (
    <main>
      <Layout>
        <Body 
          item={item} 
          error={errorMessage}
        >
        </Body>
      </Layout>
    </main>
  );
}

export default Practice;
