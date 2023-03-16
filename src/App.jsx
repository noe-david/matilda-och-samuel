import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="titleContainer">
        <h1 className="title">
          LOVISA
          <div className="handwriting och">och</div>
          MARTIN
        </h1>
        <h2 className="date">15 juli 2023</h2>
      </div>

      <div className="sections">
        <section className="box">
          <img className="img lovisaOchMartin" src="mol-bw.jpg" alt="" />
        </section>
        <section className="box">
          <h2>Vigsel</h2>
          <p>15 juli, 14:00</p>
          <p>Munsö kyrka, Slutvägen 3, 178 91 Munsö</p>
          <img className="img" src="munso-kyrka.jpg" alt="Munsö Kyrka" />
        </section>
        <section className="box">
          <h2>Bröllopsfest</h2>
          <p>Björkuddsvägen 107, 178 34 Ekerö</p>
          <img className="img" src="festlokalen.jpg" alt="" />
          <p>
            Det är en ca 25 min lång bilfärd mellan kyrka och festlokal. Det
            finns parkeringsmöjlighet utanför slottet!
          </p>
        </section>
        <section className="box">
          <h2>OSA</h2>
          <p>Senast 31/5 till lovisaochmartingiftersig@gmail.com</p>
        </section>
        <section className="box">
          <h2>Specialkost</h2>
          <p>Anmäl senast 31/5 till lovisaochmartingiftersig@gmail.com</p>
        </section>
        <section className="box">
          <h2>Klädkod</h2>
          <p>Kavaj</p>
        </section>
        <section className="box">
          <h2>Barn</h2>
          <p>
            Barn är härliga, men just denna dagen är det bara barn med egen
            inbjudan som är välkomna att fira med oss! 
          </p>
        </section>
        <section className="box">
          <h2>Önskelista</h2>
          <p>
            Önskelistan hittas på
            <a href="https://onskelista.se/w/lovisaochmartin" target="_blank">
              onskelista.se
            </a>
            . Använd lösenord <strong>15juli2023</strong>.
          </p>
        </section>
        <section className="box">
          <h2>Frågor</h2>
          <p>Kontakta värdarna på lovisaochmartingiftersig@gmail.com</p>
        </section>
      </div>
    </div>
  );
}

export default App;
