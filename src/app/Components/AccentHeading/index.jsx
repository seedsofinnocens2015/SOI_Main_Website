"use client";

/**
 * Renders a content heading with first half of text in #df3655 and rest in black, centered.
 * Use across all inner/content pages for consistent "What is IVF?" style headings.
 */
const AccentHeading = ({
  children,
  level = 2,
  className = '',
  style = {},
  forcePlain = false,
}) => {
  const text = children == null ? '' : (typeof children === 'string' ? children : String(children));
  const headingStr = text.trim();
  const Tag = level === 3 ? 'h3' : 'h2';
  const baseClass = 'cs_ivf_content_heading';

  if (forcePlain || !headingStr) {
    return (
      <Tag className={`${baseClass} ${className}`.trim()} style={style}>
        {headingStr}
      </Tag>
    );
  }

  const words = headingStr.split(/\s+/).filter(Boolean);
  const mid = Math.ceil(words.length / 2);
  const firstPart = words.slice(0, mid).join(' ');
  const restPart = words.slice(mid).join(' ');

  return (
    <Tag className={`${baseClass} ${className}`.trim()} style={style}>
      <span className="cs_heading_accent_start">{firstPart}</span>
      {restPart ? <span> {restPart}</span> : null}
    </Tag>
  );
};

export default AccentHeading;
