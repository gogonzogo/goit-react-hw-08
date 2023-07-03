import css from './Home.module.css';


const Home = () => {
  return (
    <div>
      <h1 className={css.title}>The Phonebook</h1>
      <p className={css.welcome}>
        Welcome to our intuitive and efficient phonebook application! Say
        goodbye to the hassle of managing your contacts manually and embrace a
        seamless digital experience. With our user-friendly interface,
        organizing and accessing your contacts has never been easier. Simplify
        your life and stay connected effortlessly with our powerful phonebook
        solution.
      </p>
      <p className={css.comingSoon}>
        Exciting updates are on the horizon for our phonebook application! We
        are currently working on integrating contact addresses and emails,
        allowing you to conveniently store and retrieve vital information in one
        place. Stay tuned for the upcoming feature that will enable you to add
        multiple numbers for home, cell, and work, ensuring comprehensive
        contact details for each individual. Moreover, we're thrilled to
        announce that personalization options, including the ability to add
        images to your contacts, will soon be available, making your phonebook
        truly unique. Last but not least, we are diligently working on account
        linking, which will enable you to synchronize your contacts across
        devices effortlessly. Get ready for a feature-packed phonebook
        experience that caters to all your communication needs!
      </p>
      <p className={css.security}>
        At our phonebook application, safety and security are at the core of our
        values. We prioritize the protection of your data and have implemented
        state-of-the-art security technology to ensure that your information
        remains secure and confidential. Rest assured that your contacts and
        personal details are in safe hands.
      </p>
      <p className={css.userExperience}>
        In addition to robust security measures, we are committed to providing
        an exceptional user experience. We understand the importance of a
        seamless and intuitive interface, allowing you to effortlessly manage
        your contacts with ease. Our user-friendly design ensures that you can
        navigate the application smoothly, saving you time and frustration.
      </p>
      <p className={css.support}>
        We also take pride in offering top-notch customer support. Our dedicated
        team is available to assist you during normal business hours, ready to
        address any concerns or questions you may have. Whether you prefer to
        reach out via email or phone, we are here to provide prompt and reliable
        support, ensuring that your experience with our phonebook application is
        nothing short of exceptional.
      </p>
      <p className={css.summary}>
        Your safety, user experience, and satisfaction are our utmost
        priorities. Join us and experience the perfect balance of security,
        convenience, and outstanding support in managing your contacts
        efficiently.
      </p>
    </div>
  );
};

export default Home;
