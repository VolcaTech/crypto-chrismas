import React from "react";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";
import Slider from "react-slick";
import RetinaImage from "react-retina-image";
import wallets from "./wallets";
import { getDeviceOS } from "../../../utils";

const styles = {
  logoText: {
    textAlign: "center",
    fontSize: 14,
    fontFamily: "SF Display Regular",
    marginTop: -6
  },
  logo: {
    height: 60,
    width: 60,
    margin: 7,
    borderRadius: 15,
    WebkitBoxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)"
  },
  logo5: {
    height: 50,
    width: 50,
    margin: 7,
    borderRadius: 12.5,
    WebkitBoxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)"
  },
  title: {
    textAlign: "center",
    fontFamily: "Inter UI Regular",
    fontSize: 18,
    color: "#888888",
    marginBottom: 20,
    marginTop: 20
  },
  containerStyle: {},
  nextArrow: {
    width: 20,
    height: 20,
    position: "absolute",
    top: 25,
    right: -8,
    textAlign: "right",
    color: "#4CD964"
  },
  prevArrow: { height: 20, float: "left", top: 25, paddingTop: 26 }
};

const NextArrow = props => {
    const { onClick } = props;
    return (
      <div
        style={
          window.innerWidth > 320
            ? styles.nextArrow
            : { ...styles.nextArrow, top: 20 }
        }
        onClick={onClick}
      >
        <RetinaImage src="https://raw.githubusercontent.com/VolcaTech/eth2-assets/master/images/right_arrow.png" />
      </div>
    );
  };

const PreviousArrow = props => {
    return (
      <div />
    );
  };



class WalletSlider extends React.Component {


  render() {
    const settings = {
      arrows: true,
      padding: 7,
	nextArrow: <NextArrow />,
	prevArrow: <PreviousArrow />,
      fontSize: 10,
      slidesToShow: 4,
      slidesToScroll: 4
    };

    const deviceOS = getDeviceOS();

    return (
      <div style={{ padding: 10, paddingBottom: 50 }}>
        <div style={styles.title}>Choose another wallet:</div>
        <Slider {...settings}>
          {Object.keys(wallets)
            .map(walletId => wallets[walletId])
            .filter(wallet => {
              return wallet.mobile[deviceOS] && wallet.mobile[deviceOS].support;
            })
            .map(wallet => {
              return (
                <WalletButtonContainer
                  key={wallet.id}
                  wallet={wallet}
                  selectWallet={this.props.selectWallet}
                />
              );
            })}
        </Slider>
      </div>
    );
  }
}

const WalletButtonContainer = ({ wallet, selectWallet }) => {
  let logoStyle;
  if (window.innerWidth > 320) {
    logoStyle = styles.logo;
  } else {
    logoStyle = styles.logo5;
  }

  const walletIcon = `https://raw.githubusercontent.com/Eth2io/eth2-assets/master/images/${wallet.id}.png`;

  return (
    <RetinaImage
      onClick={() => selectWallet(wallet.id)}
      className="img-responsive"
      style={logoStyle}
      src={walletIcon}
    />
  );
};

export default WalletSlider;
