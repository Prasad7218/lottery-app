import React from "react";

interface MakepdfProps {
  imgArray: string[];
}

const Makepdf: React.FC<MakepdfProps> = ({ imgArray }) => {
  return (
    <>
      <div
        style={{
          width: "270px",
          height: "400px",
          overflow: "auto",
          border: "1px solid #ccc",
          padding: "10px",
        }}
        className="box"
      >
        {imgArray.map((el) => {
          return (
            <>
              <img
                style={{
                  display: "block",
                  maxWidth: "100%",
                  marginBottom: "10px",
                }}
                src={el}
                alt="Image"
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Makepdf;
