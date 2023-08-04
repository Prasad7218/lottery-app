import Makepdf from "../common/Makepdf";

interface CardProps {
  imgArrayFromUser: string[];
  imgAudio: string;
  imgTitle: string;
  imgSrc: string;
}

const Card: React.FC<CardProps> = ({
  imgArrayFromUser,
  imgAudio,
  imgTitle,
  imgSrc,
}) => {
  return (
    <>
      <div
        className="card"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
          padding: "20px",
          margin: "15px",
        }}
      >
        <div className="container-fluid">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src={imgSrc}
              style={{ height: "210px", width: "100%" }}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title"> {imgTitle}</h5>
              <Makepdf imgArray={imgArrayFromUser} />
              <div>
                <audio
                  src={imgAudio}
                  preload="none"
                  style={{
                    width: "100%",
                    maxWidth: "300px",
                    margin: "10px 0",
                  }}
                  controls
                ></audio>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
