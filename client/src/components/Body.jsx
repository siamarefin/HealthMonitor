import "./styles/Body.css";

function Body() {
  return (
    <div className="body-container">
      {/* Left Section */}
      <section className="body-left">
        <div className="body-title-row">
          <h1 className="body-title">
            Connecting Patients & Healthcare Providers
          </h1>
          <button className="body-plus-btn">+</button>
        </div>
        <p className="body-desc">Your journey to better health starts here</p>
        <div className="body-slider-card">
          <div className="slider-label">GYM TRACKING</div>
          <img src="/gym.jpeg" alt="gym" className="slider-img" />
          <button className="slider-arrow-btn">↗</button>
        </div>

        <div className="body-slider-card">
          <div className="slider-label">FOOD TRACKING</div>
          <img src="/food.jpeg" alt="food" className="slider-img" />
          <button className="slider-arrow-btn">↗</button>
        </div>

        <div className="body-slider-card">
          <div className="slider-label">BLOOD PRESSURE</div>
          <img src="/blood.jpeg" alt="food" className="slider-img" />
          <button className="slider-arrow-btn">↗</button>
        </div>

        <div className="body-slider-card">
          <div className="slider-label">MEDICATION REMINDER</div>
          <img src="/MedicineTime.jpeg" alt="food" className="slider-img" />
          <button className="slider-arrow-btn">↗</button>
        </div>
        <div className="body-slider-card">
          <div className="slider-label">WATER INTAKE</div>
          <img src="/Water.jpeg" alt="food" className="slider-img" />
          <button className="slider-arrow-btn">↗</button>
        </div>
        <div className="body-slider-card">
          <div className="slider-label">HEART RATE</div>
          <img src="/HeartRate.png" alt="food" className="slider-img" />
          <button className="slider-arrow-btn">↗</button>
        </div>
      </section>

      {/* Right Section (stacked vertically below left section) */}
      <section className="body-right">
        <div className="body-grid">
          <div
            className="grid-item grid-sleep-stats"
            style={{
              backgroundImage: "url('/sleep2.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              position: "relative",
            }}
          >
            <div className="sleep-stats-label">Sleep statistics.</div>
            <div className="sleep-stats-content">
              {/* <div className="session-info">
                Session started:
                <br />
                09:30 PM
              </div> */}
              <div className="sleep-quality">
                <span className="sleep-percent">75%</span>
                <span className="sleep-quality-label">
                  Check your
                  <span style={{ display: "block" }}>Sleep Quality</span>
                </span>
              </div>
            </div>
            <div className="scroll-indicator">scroll</div>
          </div>
          <div className="grid-item grid-login">
            <img src="/doctor1.png" alt="Headset" className="login-img" />
            <div className="login-badge">
              <img src="/doctor2.png" alt="User" className="avatar-img" />
              <span style={{ display: "inline-block", lineHeight: 1.2 }}>
                Want to take Advice
                <span style={{ display: "block" }}>From Doctor ?</span>
              </span>
            </div>
          </div>
          <div className="grid-item grid-emdr">
            <div className="emdr-header">
              <span className="emdr-icon">🦉</span>
              <span className="emdr-arrow">»</span>
            </div>
            <div className="emdr-title">
              Monitor your health
              <br />
              Improve your life
            </div>
            <div className="emdr-desc">
              accurately track and
              <br />
              analyze your sleep cycles
            </div>
            <div className="emdr-squares">
              <span className="square"></span>
              <span className="square"></span>
              <span className="square"></span>
              <span className="square"></span>
            </div>
          </div>
        </div>

        <div>
          <p> </p>
        </div>

        <div className="body-grid">
          <div
            className="grid-item grid-sleep-stats"
            style={{
              backgroundImage: "url('/health.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              position: "relative",
            }}
          ></div>
          <div className="grid-item grid-login">
            <img src="/medicine.jpg" alt="Headset" className="login-img" />
            <div className="login-badge">
              <img src="/doctor2.png" alt="User" className="avatar-img" />
              <span style={{ display: "inline-block", lineHeight: 1.2 }}>
                Want to Know about
                <span style={{ display: "block" }}>Medicine ?</span>
              </span>
            </div>
          </div>
          <div className="grid-item grid-emdr">
            <div className="emdr-header">
              <span className="emdr-arrow">»</span>
            </div>
            <div className="emdr-title">Emergency Number Here</div>
            <div className="emdr-desc">We are available to help you</div>
            <ul className="emdr-list-vertical">
              <li className="square">
                Ambulance : <a href="tel:102" className="number"> 01750526864</a>
              </li>
              <li className="square">
                Fire : <a href="tel:101" className="number"> 01768645052</a>
              </li>
              <li className="square">
                Police : <a href="tel:100" className="number"> 01768605452</a>
              </li>
              <li className="square">
                Nearest Hospital :{" "}
                <button type="button" className="link-btn">
                  Find on Map
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <p> </p>
        </div>
      </section>
    </div>
  );
}

export default Body;
