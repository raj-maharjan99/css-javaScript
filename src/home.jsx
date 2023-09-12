import "./home.css";

const heading = "KUMARI a Living Goddes";

const mainContent =
  " KUMARI typically refers to a title given to a prepubescent girl in Nepal, especially in the context of the Kumari of Kathmandu Valley. She is selected to serve as a living goddess and is revered in Hindu and Buddhist traditions. The Kumari lives in a temple, rarely leaving, until she reaches puberty, at which point she relinquishes her role.";

function Home() {
  return (
    <div>
      <div className="container">
        <h1>{heading}</h1>
      </div>

      <div className="container1">
        <h2>{mainContent}</h2>
        <a
          href="https://en.wikipedia.org/wiki/Kumari_(goddess)"
          target="_blank"
        >
          <img
            className="image"
            src="https://aasraecotreks.com.np/wp-content/uploads/2018/08/Goddess-Kumari-of-nepal.jpg"
            alt="kumari logo"
          />
        </a>{" "}
        <a
          href="https://en.wikipedia.org/wiki/Kumari_(goddess)"
          target="_blank"
        >
          <img
            className="image"
            src="https://cdn-hibnp.nitrocdn.com/FXuZRBaZqjQhLrsqxyAxPAKrYTiHMJDc/assets/images/optimized/rev-9cade26/heavenhimalaya.com/wp-content/uploads/2021/07/Goddess-Kumari-heavenhimalaya-300x300.jpg"
            alt="kumari logo"
          />
        </a>
      </div>
      <div className="container2">
        <h3>copyright &copy; Raj Maharjan 2023</h3>
      </div>
    </div>
  );
}

export default Home;
