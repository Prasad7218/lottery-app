import Header from "@/components/header/Header";
import hanuman from "@/assets/images/hanuman.jpg";
import mahadev from "@/assets/images/mahadev.jpg";
import balaji from "@/assets/images/balaji.jpg";
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
        className="card"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
          padding: "20px",
        }}
      >
        <div className="container-fluid">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={imageSource1}
              style={{ height: "300px", width: "100%" }}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Hanuman Chalisa</h5>
              <iframe
                title="Hanuman Chalisa PDF"
                src="/assets/pdf/hanumanChalisa.pdf"
              ></iframe>
              <div
                style={{
                  width: "400px",
                  height: "500px",
                  overflow: "auto",
                  border: "1px solid #ccc",
                  padding: "10px",
                }}
                className="box"
              >
                <img
                  style={{
                    display: "block",
                    maxWidth: "100%",
                    marginBottom: "10px",
                  }}
                  src="/assets/images/hanuman1.png"
                  alt="Image 1"
                />
                <img
                  style={{
                    display: "block",
                    maxWidth: "100%",
                    marginBottom: "10px",
                  }}
                  src="/assets/images/hanuman2.png"
                  alt="Image 2"
                />
                <img
                  style={{
                    display: "block",
                    maxWidth: "100%",
                    marginBottom: "10px",
                  }}
                  src="/assets/images/hanuman3.png"
                  alt="Image 3"
                />
              </div>
              <div>
                <audio
                  src="/assets/audio/hanumanchalisa.mp3"
                  preload="none"
                  controls
                ></audio>
              </div>
            </div>
            <canvas id="pdfCanvas"></canvas>
          </div>
        </div>
      </div>
    </main>
  );
}
