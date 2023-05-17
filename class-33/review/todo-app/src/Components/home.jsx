import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Todo from './Todo';

function Home() {
  return (
    <div id="app-home">
      <Header />
      <Todo />
      <Footer />
    </div>
  );
}

export default Home;
