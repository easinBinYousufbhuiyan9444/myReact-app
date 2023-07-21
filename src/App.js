import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer'; 

 
 

const App = () => {
  const title = "My React Text Display App";

  return (
    <div className="App">
      <Header   title={title} />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
