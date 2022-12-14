import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader 
  className="pets-item"
    speed={2}
    width={250}
    height={410.6}
    viewBox="0 0 250 410.6"
    backgroundColor="#f0f0f0"
    foregroundColor="#ededed"
  >
    <rect x="425" y="541" rx="3" ry="3" width="380" height="6" /> 
    <rect x="0" y="0" rx="0" ry="0" width="250" height="250" /> 
    <rect x="75" y="290" rx="0" ry="0" width="100" height="23" /> 
    <rect x="29" y="343" rx="30" ry="30" width="192" height="63" />
  </ContentLoader>
)

export default Skeleton;