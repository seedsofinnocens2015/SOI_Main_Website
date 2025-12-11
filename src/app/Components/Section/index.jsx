"use client"
import Spacing from "../Spacing";
import { getAssetPathClient } from "../../utils/assetPath";

export default function Section({
  topSpaceLg = "80",
  topSpaceMd = "70",
  bottomSpaceLg = "80",
  bottomSpaceMd = "70",
  backgroundImage = "",
  className,
  id = "",
  children,
  ...props
}) {
  const processedBackgroundImage = backgroundImage ? getAssetPathClient(backgroundImage) : "";
  
  return (
    <section
      className={`${className ? className : ""}`}
      id={id}
      {...props}
      style={
        processedBackgroundImage
          ? {
              backgroundImage: `url(${processedBackgroundImage})`,
            }
          : {}
      }
    >
      <Spacing lg={topSpaceLg} md={topSpaceMd} />
      {children}
      <Spacing lg={bottomSpaceLg} md={bottomSpaceMd} />
    </section>
  );
}
