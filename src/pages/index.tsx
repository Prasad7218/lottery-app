import Header from "@/components/header/Header";
import hanuman from "@/assets/images/hanuman.jpg";
import mahadev from "@/assets/images/mahadev.jpg";
import balaji from "@/assets/images/balaji.jpg";
import Makepdf from "@/components/common/Makepdf";
import Card from "@/components/card/Card";
// import hanuman1 from "@/public/ass";
// import hanuman2 from "@/public/assets/images/hanuman2.png";

// import hanuman3 from "@/public/assets/images/hanuman3.png";

// import { Document, Page, pdfjs } from "@react-pdf/renderer";

export default function Home() {
  const imageSource1 = hanuman.src;
  const imageSource2 = mahadev.src;
  const imageSource3 = balaji.src;
  // const imageSource11 = hanuman1.src;
  // const imageSource12 = hanuman2.src;

  // const imageSource13 = hanuman3.src;

  const pdfPath = "path/to/your-downloaded-file.pdf";

  // Fetch the PDF file
  // fetch(pdfPath)
  //   .then((response) => response.arrayBuffer())
  //   .then((data) => {
  //     // Render the PDF using PDF.js
  //     pdfjsLib.getDocument({ data }).promise.then(function (pdf) {
  //       pdf.getPage(1).then(function (page) {
  //         const canvas = document.getElementById("pdfCanvas");
  //         const context = canvas.getContext("2d");
  //         const viewport = page.getViewport({ scale: 1.5 });
  //         canvas.width = viewport.width;
  //         canvas.height = viewport.height;
  //         page.render({ canvasContext: context, viewport: viewport });
  //       });
  //     });
  //   });
  const hanumanArray = [
    "/assets/images/h1.png",
    "/assets/images/h2.png",
    "/assets/images/h3.png",
    "/assets/images/h4.png",
    "/assets/images/h5.png",
    "/assets/images/h6.png",
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
      <Card
        imgArrayFromUser={hanumanArray}
        imgAudio="/assets/audio/hanumanchalisa.mp3"
        imgTitle="Hanuman Chalisa"
        imgSrc="/assets/images/hanuman.jpg"
      />
    </main>
  );
}
