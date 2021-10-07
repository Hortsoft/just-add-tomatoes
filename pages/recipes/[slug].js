import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import Image from "next/image";
import Skeleton from "../../components/Skeleton";
import BlogBanner from "../../components/BlogBanner";
import ReactReadMoreReadLess from "react-read-more-read-less";

const client = createClient({
  // created at top level putside both functions
  space: "8s27tytzwtrj",
  accessToken: "HjT_z6HggNCGS1sG0lmq-uwXpC3ydF_jr73-70w67NU",
});

// use client object to the get the slug for all of the entries
// added fallback skeleton page
export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "blogPost",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });
  return {
    // return an array of path objects
    paths: paths,
    fallback: true,
  };
};

// use getstatic props to get the detail for the single item we need at buidl time. to geerate path based on the page we ar eo n (slug)
export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "blogPost",
    "fields.slug": params.slug,
  });

  // If the blog post does not exist then send user somewhere, say hompegae
  if (!items.length) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: { blogpost: items[0] },
    revalidate: 1,
  };
}

export default function RecipeDetails({ blogpost }) {
  // run a check to see if page exists , if not show fall back page

  const richtext_options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <p className="text-gray-900"> {children}</p>;
      },
       
      [INLINES.HYPERLINK]: (node, children) => {
        console.log(node);
        return (
          <a className="text-blue-400" href={node.data.uri}>
            {" "}
            {children}
          </a>
        );
      },
      [INLINES.EMBEDDED_ENTRY]: (node, children) => {
        console.log(node);
        // you html code goes here
        return (
          <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
            {" "}
            <Image
              className="w-full"
              src={`https://${node.data.target.fields.heroImage.fields.file.url}`}
              height={
                node.data.target.fields.heroImage.fields.file.details.image
                  .height
              }
              width={
                node.data.target.fields.heroImage.fields.file.details.image
                  .width
              }
              alt={node.data.target.fields.description}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                {node.data.target.fields.eventTitle}
                {node.data.target.fields.title}
              </div>
              <p className="text-grey-darker text-base">
                {" "}
                {node.data.target.fields.eventDate}
                {node.data.target.fields.eventDescription}
              </p>
            </div>
            <div>
              <a  className="font-semibold"
                href={`https://just-add-tomatoes.azurewebsites.net/events/${node.data.target.fields.slug}`}
              >
                {" "}
                link for event
              </a> //
              <a   className="font-semibold"
                href={`https://just-add-tomatoes.azurewebsites.net/recipes/${node.data.target.fields.slug}`}
              >
                {" "}
               link for article
              </a>
            </div>
          </div>
        );
      },
      [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
        // target the contentType of the EMBEDDED_ENTRY to display as you need
        console.log(node);
        if (node.nodeType === "embedded-entry-block") {
          return (
            <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
            {" "}
            <Image
              className="w-full"
              src={`https://${node.data.target.fields.heroImage.fields.file.url}`}
              height={
                node.data.target.fields.heroImage.fields.file.details.image
                  .height
              }
              width={
                node.data.target.fields.heroImage.fields.file.details.image
                  .width
              }
              alt={node.data.target.fields.description}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                {node.data.target.fields.eventTitle}  {node.data.target.fields.title}
              </div>
              <p className="text-grey-darker text-base">
                {" "}
                {node.data.target.fields.eventDate}
                {node.data.target.fields.eventDescription}
                {node.data.target.fields.description}
                {node.data.target.fields.publishDate}
              </p>
            </div>
            <div className="px-6 py-4">
              <a
                href={`https://just-add-tomatoes.azurewebsites.net/recipes/${node.data.target.fields.slug}`}
              >
                {" "}
                article link
              </a> //
              <a
                href={`https://just-add-tomatoes.azurewebsites.net/events/${node.data.target.fields.slug}`}
              >
                {" "}
                event link
              </a>
            </div>
          </div>
          );
        }

        if (node.data.target.sys.contentType.sys.id === "videoEmbed") {
          return (
            <iframe
              src={node.data.target.fields.embedUrl}
              height="100%"
              width="100%"
              frameBorder="0"
              scrolling="no"
              title={node.data.target.fields.title}
              allowFullScreen={true}
            />
          );
        }
      },
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
        console.log(node);
        // render the EMBEDDED_ASSET as you need image or video

        if (node.data.target.fields.file.contentType === "video/mp4") {
          return (
            <video
              src={`https://${node.data.target.fields.file.url}`}
              autoPlay
              muted
              alt={node.data.target.fields.description}
            />
          );
        } else if (node.data.target.fields.file.contentType === "image/jpeg") {
          return (
            <Image
              src={`https://${node.data.target.fields.file.url}`}
              height={node.data.target.fields.file.details.image.height}
              width={node.data.target.fields.file.details.image.width}
              alt={node.data.target.fields.description}
            />
          );
        } else {
          return <p>Unknown content type</p>;
        }
      },
    },
  };

  if (!blogpost)
    return (
      <div>
        <Skeleton />
      </div>
    );
  // destructure props
  const { title, description, method, author, publishDate, thumbnail } =
    blogpost.fields;

  // read more less text
  const longText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum venenatis pulvinar. Proin vitae lectus urna. Sed erat ipsum, maximus a elit nec, condimentum placerat ex. Ut tincidunt mi eget condimentum mollis. Pellentesque aliquam velit quis est varius, sed molestie dolor ultrices. Pellentesque eget dapibus eros, at blandit arcu. Duis id purus quis mi porttitor viverra vel tempus elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos posuere";

  return (
    <>
      <BlogBanner blogposts={blogpost.fields} />
      <div className="bg-white-50 pt-10">
        <div className="max-w-11xl mx-auto grid grid-cols-12 bg-white-200">
          <div className="col-span-2">
            <h3 className="mx-auto mb-6 text-2xl font-semibold text-black lg:text-3xl">
              {" "}
              side stuff
            </h3>
          </div>
          <div className="col-span-8 bg-white">
            <div className="mx-auto text-base font-medium leading-relaxed text-gray-800">
              <h2 className="mx-auto mt-4 mb-4 text-xl font-sans font-semibold text-black">
                {title}
              </h2>
            </div>
            <div className="mx-auto text-base font-medium leading-relaxed text-gray-800">
              <h3 className="mx-auto mt-4 mb-4 text-xl font-normal text-black">
                Information
              </h3>
              <span className="mx-auto mt-4 mb-4 font-sans text-xl font-normal text-black">
                {documentToReactComponents(method, richtext_options)}
              </span>
            </div>{" "}
            <div className="mx-auto text-base font-medium leading-relaxed text-gray-800">
              {" "}
              <ReactReadMoreReadLess
                charLimit={200}
                readMoreText={"Read more ▼"}
                readLessText={"Read less ▲"}
                readMoreClassName="read-more-less--more"
                readLessClassName="read-more-less--less"
              >
                {longText}
              </ReactReadMoreReadLess>
            </div>
            <div className="mx-auto text-base font-medium leading-relaxed text-gray-800">
              <p className="mx-auto mt-4 mb-4 text-xl font-normal text-black">
                {publishDate}
              </p>
            </div>
            <div className="mx-auto text-base font-medium leading-relaxed text-gray-800">
              <p className="mx-auto mt-4 mb-4 text-xl font-semibold text-black">
                Tags
              </p>

              {blogpost.metadata.tags.map((name) => (
                <span key={name}>{name}</span>
              ))}
            </div>
          </div>
          <div className="col-span-2">
            <h3 className="mx-auto mb-6 text-2xl font-semibold text-black lg:text-xl">
              {" "}
              side stuff
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
