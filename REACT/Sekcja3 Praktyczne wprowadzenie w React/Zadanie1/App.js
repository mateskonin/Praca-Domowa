const header = <h1 className="title">Witaj na stronie</h1>;

const classBig = "big";
const handleClick = () => {
  alert("klik");
};
const main = (
  <div>
    <h1 onClick={handleClick} className="red">
      Pierwszy artykuł
    </h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
      repudiandae ab, maxime nam incidunt dolor molestiae cum libero
      praesentium. Ex nesciunt expedita similique quis! Iure commodi saepe
      voluptates praesentium beatae?
    </p>
  </div>
);
const footer = (
  <footer>
    <p className={classBig}>Stopka</p>
  </footer>
);

const app = [header, main, footer];

ReactDOM.render(app, document.getElementById("root"));
