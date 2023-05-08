import './App.scss';

import Header from './Header';
import List from './List';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <p>I am a paragraph</p>
      <Header headerText="Banana" /> {/* let component = new Header({headerText: 'Banana'}) */}
      <List data={['Item One', 'Item Two']} />
      <Footer year="2023" /> {/* View += Footer(state) */ }
    </div>
  );
}

export default App;
