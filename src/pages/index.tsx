import Header from "@/components/header/Header";
import hanuman from "@/assets/images/hanuman.jpg";
import mahadev from "@/assets/images/mahadev.jpg";
import balaji from "@/assets/images/balaji.jpg";
import Card from "@/components/card/Card";

export default function Home() {
  const imageSource1 = hanuman.src;
  const imageSource2 = mahadev.src;
  const imageSource3 = balaji.src;

  const hanumanArray = [
    "/assets/images/h1.png",
    "/assets/images/h2.png",
    "/assets/images/h3.png",
    "/assets/images/h4.png",
    "/assets/images/h5.png",
    "/assets/images/h6.png",
  ];
  const ganpati_sukhkarta_aarti = [
    "/assets/images/ganpatia1/g1.png",
    "/assets/images/ganpatia1/g2.png",
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />
      <div>
        <div
          id="carouselExampleCaptions"
          style={{ height: "400px" }}
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={imageSource1}
                style={{ height: "400px" }}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={imageSource2}
                style={{ height: "400px" }}
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src={imageSource3}
                style={{ height: "400px" }}
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div
        className="container-fluid"
        style={{ display: "flex", flexWrap: "wrap" }}
      >
        <Card
          imgArrayFromUser={hanumanArray}
          imgAudio="/assets/audio/hanumanchalisa.mp3"
          imgTitle="Hanuman Chalisa"
          imgSrc="/assets/images/hanuman.jpg"
        />
        <Card
          imgArrayFromUser={ganpati_sukhkarta_aarti}
          imgAudio="/assets/audio/ganpati_sukh_karta_aarti.mp3"
          imgTitle="Ganpati Sukh karta aarti"
          imgSrc="/assets/images/ganpati.jpg"
        />
        <Card
          imgArrayFromUser={hanumanArray}
          imgAudio="/assets/audio/hanumanchalisa.mp3"
          imgTitle="Hanuman Chalisa"
          imgSrc="/assets/images/hanuman.jpg"
        />
        <Card
          imgArrayFromUser={hanumanArray}
          imgAudio="/assets/audio/hanumanchalisa.mp3"
          imgTitle="Hanuman Chalisa"
          imgSrc="/assets/images/hanuman.jpg"
        />
        <Card
          imgArrayFromUser={hanumanArray}
          imgAudio="/assets/audio/hanumanchalisa.mp3"
          imgTitle="Hanuman Chalisa"
          imgSrc="/assets/images/hanuman.jpg"
        />
        <Card
          imgArrayFromUser={hanumanArray}
          imgAudio="/assets/audio/hanumanchalisa.mp3"
          imgTitle="Hanuman Chalisa"
          imgSrc="/assets/images/hanuman.jpg"
        />
      </div>
    </main>
  );
}
