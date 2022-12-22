import { Link } from "react-router-dom";

const Public = () => {
  const content = (
    <section className="public">
      <header>
        <h1>Welcome to succ-ville</h1>
      </header>
      <main>
        <p>Located in foo-city, repair shop</p>
        <p>&nbsp</p>
        <address>
          repair store
          <br />
          555 foo city
          <br />
          foo city, DE
          <br />
          <a href="tel:+15555555555">(555) 555-5555</a>
        </address>
      </main>
      <footer>
        <Link to="/login">Employee Login</Link>
      </footer>
    </section>
  );

  return content;
};

export default Public;
