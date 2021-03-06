import React from "react";
import RetinaImage from "react-retina-image";
import styles from "./styles";

const CharityPopUp = ({ handleClick }) => {
  return (
    <div style={styles.popUpContainer}>
      <RetinaImage
        className="img-responsive hover"
        style={{ float: "right", margin: 15 }}
        src="https://raw.githubusercontent.com/VolcaTech/eth2-assets/master/images/close.png"
        onClick={handleClick}
      />
      <div style={styles.popUpTopText}>
        All proceeds from the Nifty tokens sales go directly to our two partner
        projects in Venezuela:
      </div>
      <RetinaImage
        className="img-responsive"
        style={{ margin: "auto", marginTop: 30, marginBottom: 15 }}
        src="https://raw.githubusercontent.com/VolcaTech/eth2-assets/master/images/giveth.png"
      />
      <RetinaImage
        className="img-responsive"
        style={{ margin: "auto" }}
        src="https://raw.githubusercontent.com/VolcaTech/eth2-assets/master/images/btcven.png"
      />
      <div style={styles.popUpBottomText}>
        Follow the campaign progress on our{" "}
        <a
           href="https://beta.giveth.io/campaigns/5c0e84ea06392d786b64d484"
	   target="_blank"
          style={{ textDecoration: "underline", color: "black" }}
        >
          Giveth site
        </a>{" "}
        or go to our{" "}
        <a
          href="https://cryptoxmas.xyz/"
          style={{ textDecoration: "underline", color: "black" }}
        >
          website
        </a>{" "}
        for the details.
      </div>
    </div>
  );
};

export default CharityPopUp;
