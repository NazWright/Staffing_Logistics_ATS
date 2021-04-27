import { GoogleApiWrapper } from "google-maps-react";

import React, { Component } from "react";

export class Map extends Component {
  render() {
    return <div>Maps</div>;
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCJ590ZkdA4P9dmFwj2cyuH9Szz8J98Dig",
})(Map);
