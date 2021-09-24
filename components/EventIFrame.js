import React   from "react";

 
const EventIFrame = ({ src, width, height }) => (
  <iframe src={src} width={width} height={height} scrolling="no"></iframe>
);

export default EventIFrame;