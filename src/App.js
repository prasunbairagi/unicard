import "./App.css";
import img1 from "../src/assets/images/one_percent_cashback.png";
import vid from "../src/assets/images/nxt_wave_bg.mp4";

function App() {
  return (
    <div className="App">
      <div class="homeBanner">
        <nav
          className="navbar navbar-expand-lg "
          style={{ backgroundColor: "transparent !important", zIndex: 2 }}
        >
          <div className="container-fluid px-5 py-0">
            <a className="navbar-brand" href="/">
              <svg
                className="logosvgs"
                viewBox="0 0 85 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M54.894 39.5039H48.6641V19.77H54.894V39.5039ZM30.4021 25.9999V39.504H24.1723V22.3647C24.1723 21.6765 24.4457 21.0165 24.9322 20.5301C25.4188 20.0435 26.0787 19.77 26.7669 19.77H42.3312C43.0195 19.77 43.6793 20.0435 44.1657 20.5301C44.6523 21.0165 44.9257 21.6765 44.9257 22.3647V39.504H38.696V25.9999H30.4021ZM14.2345 33.2742V19.7702H20.4644V36.9095C20.4644 37.5977 20.1909 38.2576 19.7044 38.744C19.2179 39.2307 18.5579 39.5041 17.87 39.5041H2.30544C1.61752 39.5041 0.957379 39.2307 0.470894 38.744C-0.0157201 38.2576 -0.289062 37.5977 -0.289062 36.9095V19.7702H5.9407V33.2742H14.2345Z"
                  fill="black"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M65.289 19.7708C65.289 21.8685 63.5858 23.5717 61.4882 23.5717C59.3905 23.5717 57.6875 21.8685 57.6875 19.7708C57.6875 17.6732 59.3905 15.9702 61.4882 15.9702C63.5858 15.9702 65.289 17.6732 65.289 19.7708Z"
                  fill="black"
                ></path>
              </svg>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
              <form className="d-flex" role="search">
                <button
                  className="btn btn-outline-success navButton"
                  type="submit"
                >
                  Uni Paycheck
                </button>
              </form>
            </div>
          </div>
        </nav>
        <video autoPlay loop muted playsInline className="bgVideo">
          <source src={vid} type="video/mp4" />
        </video>
        <div className="d-flex justify-content-center align-items-center" style={{zIndex:2,position:'absolute',width:'100%', height:'100%'}}>
          <div>kjjkj</div>
        </div>
      </div>

      <div className="sections">
        <div className="contentsection">
          <div>Earn 1% assured cashback on your spends. Get 5X</div>

          <div>more value than cashback at the Uni Store. Enjoy</div>

          <div>round the clock Whatsapp support. And it's</div>

          <div>lifetime free; no joining fee, no annual charges.</div>
        </div>
      </div>
      <div className="sections">
        <div className="row mx-0 px-5">
          <div className="col-8 my-auto contentsection text-start">
            1% assured cashback on your spends.The more you spend, the more you
            earn.
          </div>
          <div className="col-4">
            <img src={img1} className="imgclass" alt="" />
          </div>
        </div>
      </div>
      <div className="sections">
        <div className="row mx-0 px-5">
          <div className="col-4">
            <img src={img1} className="imgclass" alt="" />
          </div>
          <div className="col-8 my-auto contentsection text-end">
            1% assured cashback on your spends.The more you spend, the more you
            earn.
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
