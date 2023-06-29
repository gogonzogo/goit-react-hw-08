import css from './Home.module.css';


const Home = () => {
  return (
    <div>
      <h1 className={css.title}>The Phonebook</h1>
      <p>
        Welcome to our intuitive and efficient phonebook application! Say
        goodbye to the hassle of managing your contacts manually and embrace a
        seamless digital experience. With our user-friendly interface,
        organizing and accessing your contacts has never been easier. Simplify
        your life and stay connected effortlessly with our powerful phonebook
        solution.
      </p>
    </div>
  );
};

export default Home;
