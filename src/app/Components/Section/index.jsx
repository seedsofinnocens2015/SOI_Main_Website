import Spacing from "../Spacing";

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
  return (
    <section
      className={`${className ? className : ""}`}
      id={id}
      {...props}
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
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
