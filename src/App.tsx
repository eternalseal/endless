import { useQuery } from 'react-query';

import Logo from './assets/logo-white.svg';
import ListBox from './components/ListBox';
import { getContent } from './services/content';
import './styles/app.scss';

function App() {
  const { api, getKey } = getContent();
  const { data } = useQuery(getKey(), api);
  return (
    <div className="container">
      <header>
        <nav>
          <img src={Logo} alt="logo" />
        </nav>
        <section className="hero">
          <img
            src="/images/photo-couch.jpg"
            alt="A boy and a girl playing video games with controller on tv. They ary sitting on a couch. The TV has a plant to the right of it"
          />
          <div className="content">
            <h1>New Games & Accessories</h1>
            <h2>Monthly packages. Excitement delivered daily</h2>
            <p>
              What&apos;s the best way to shop for the latest video games and
              peripherals? How about never shopping at all? You&apos;ll get new
              stuff on your doorstep — every month.
            </p>
            <button type="button" className="btn">
              get started
            </button>
          </div>
        </section>
      </header>
      <main className="work">
        <h3>How it works</h3>
        <ul className="list">
          {data?.map((item) => {
            return <ListBox item={item} key={item.id} />;
          })}
        </ul>
      </main>
    </div>
  );
}

export default App;
