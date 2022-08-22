import React, { useRef, useEffect, useState } from "react";
import swal from "sweetalert";
import { AiOutlineUpload } from "react-icons/ai";
import { Link } from "react-router-dom";

import "./Verification.css";

const Verification = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [disable, setDisable] = useState(true);
  let videoRef = useRef(null);
  let photoRef = useRef(null);

  //get user cam

  const getUserCamera = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: true,
      })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;

        video.play();
      })
      .catch((error) => {
        swal({
          text: "Allow Camera To Take Image To Verify Yourself",
          icon: "error",
          error,
        });
      });
  };

  useEffect(() => {
    getUserCamera();
  }, [videoRef]);

  const takeImage = () => {
    //set heigt and width
    let width = 300;
    let height = width / (16 / 9);

    let photo = photoRef.current;
    let video = videoRef.current;

    //set width of pic
    photo.width = width;
    photo.height = height;

    let ctx = photo.getContext("2d");

    ctx.drawImage(video, 0, 0, photo.width, photo.height);
  };
  let clearImage = () => {
    let photo = photoRef.current;
    let ctx = photo.getContext("2d");

    ctx.clearRect(0, 0, photo.width, photo.height);
  };

  return (
    <div>
      <video style={{ width: "30%", height: "30%" }} ref={videoRef}></video>

      <div>
        <button className="button" onClick={takeImage} value={disable}>
          {" "}
          Take image
        </button>
      </div>
      <div className="verify_div">
        <div style={{ width: "50%", height: "50%" }}>
          <canvas ref={photoRef}></canvas>
        </div>
        <div className="upload_photo">
          <div>
            {selectedImage && (
              <div>
                <img
                  alt="not fount"
                  width={"250px"}
                  src={URL.createObjectURL(selectedImage)}
                />
                <br />
                {/* <button onClick={() => setSelectedImage(null)}>Remove</button> */}
              </div>
            )}
            <br />

            <br />
            <button type="button" className="btn_warning">
              <AiOutlineUpload /> Upload CNIC
              <input
                type="file"
                name="myImage"
                accept="image/*"
                onChange={(event) => {
                  console.log(event.target.files[0]);
                  setSelectedImage(event.target.files[0]);
                }}
              />
            </button>
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button className="button" onClick={clearImage}>
          {" "}
          Verify
        </button>
        <Link to="/onbording">
          <button className="button"> Next</button>
        </Link>
      </div>
    </div>
  );
};

export default Verification;
