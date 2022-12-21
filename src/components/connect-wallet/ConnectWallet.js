import React from "react";

const ButtonStyle = {
  marginLeft: "auto",
  marginRight: "32px",
};

const ConnectWallet = () => {
  return (
    <button
      style={ButtonStyle}
      class={"btn btn-outline-light"}
      onClick={() => console.log("hui")}
    >
      Connect
    </button>
  );
};

export default React.memo(ConnectWallet);
