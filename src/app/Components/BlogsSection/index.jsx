"use client"
import Link from "next/link";
import Image from "next/image";
import { getAssetPathClient } from "../../utils/assetPath";

const BlogSection = ({ data }) => {
  // Split the title to get first word and rest
  const getTitleParts = (title) => {
    if (!title) return { first: '', rest: '' };
    const words = title.split(' ');
    const first = words[0] || '';
    const rest = words.slice(1).join(' ');
    return { first, rest };
  };

  const titleParts = getTitleParts(data.sectionTitle);

  return (
    <>
      <div className="container">
        {data.sectionTitle && (
          <div className="cs_service_title_section">
            <h2 className="cs_service_main_title">
              <span className="cs_service_main_title_span">{titleParts.first}</span> {titleParts.rest}
            </h2>
          </div>
        )}

        <div className="cs_height_30 cs_height_lg_30" />
        <div className="cs_blog_section_wrapper">
          {/* Design Image - Background (behind the grid, right side) */}
          {data?.designImage && (
            <div className="cs_blog_design_image">
              <Image
                src={getAssetPathClient(data.designImage)}
                alt="Design Background"
                width={300}
                height={400}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain'
                }}
              />
            </div>
          )}
          <div className="cs_blog_grid">
            {data.postsData.map((post, index) => (
              <article key={index} className="cs_blog_card_figma">
                {post.thumbnail && (
                  <Link
                    href={post.postLink}
                    className="cs_blog_card_image"
                  >
                    <Image 
                      src={getAssetPathClient(post.thumbnail)} 
                      alt={post.title} 
                      width={396} 
                      height={261}
                      loading="eager"
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  </Link>
                )}
                <div className="cs_blog_card_content">
                  <h3 className="cs_blog_card_title">
                    <Link href={post.postLink}>{post.title}</Link>
                  </h3>
                  <Link href={post.postLink} className="cs_blog_card_link">
                    {post.btnText || "Explore Now-"}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogSection;
