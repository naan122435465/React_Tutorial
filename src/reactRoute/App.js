import HomePage from "./pages/Home";
import NewsPage from "./pages/News";
import ContactPage from "./pages/Contact";
function App() {
  return (
    <div className="app">
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">News</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </nav>
      <HomePage />
      <NewsPage />
      <ContactPage />
    </div>
  );
}
export default App;
