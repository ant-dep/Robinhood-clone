import "./App.css";
import Header from "./components/Header/Header";
import NewsFeed from "./components/NewsFeed/NewsFeed";
import Stats from "./components/Stats/Stats";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__container">
        <NewsFeed />
        <Stats />
      </div>
    </div>
  );
}
export default App;
