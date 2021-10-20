import React, { lazy } from "react";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
//import RichTextToReact from 'rich-text-to-react'; 
import Image from "next/image";
import Link from "next/link";
import Skeleton from "../../components/Skeleton";
import EventBanner from "../../components/EventBanner";  

const client = createClient({
  // created at top level putside both functions
  space: "8s27tytzwtrj",
  accessToken: "HjT_z6HggNCGS1sG0lmq-uwXpC3ydF_jr73-70w67NU",
});

// use client object to the get the slug for all of the entries
// added fallback skeleton page
export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "event",
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
// use getstatic props to get the detail for the single item we need at buiLD time. to generate path based on the page we ar eo n (slug)
export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: "event",
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
    props: { event: items[0] },
    revalidate: 1,
  };
}

export default function EventDetails({ event }) {
  // run a check to see if page exists , if not show fall back page

  if (!event)
    return (
      <div>
        <Skeleton />
      </div>
    );
  // destructure props
  const {
    eventTitle,
    eventDescription,
    eventDate,
    eventInfo,
    eventWebUrl,
    iFrameSrc,
    iFrameSysid,
    heroImage,
    slug
  } = event.fields;

  return (
    <>
      <EventBanner event={event.fields} />
      <div className="bg-white-50 pt-10">
        <div className="max-w-11xl mx-auto grid grid-cols-12 gap-6 ">
          <div className="col-span-2 ">
            <h3 className="mx-auto mb-6 text-2xl font-semibold text-black lg:text-3xl">
              {" "}
              side stuff
            </h3>
          </div>
          <div className="col-span-4 bg-white">
            <div className="mx-auto text-base font-medium leading-relaxed text-gray-800">
              <h2 className="mx-auto mt-4 mb-4 text-xl font-sans font-semibold text-black">
                {eventTitle}
              </h2>
              <p className="mx-auto mt-4 mb-4 text-xl font-sans font-normal text-black">
                {eventDate}
              </p>
            </div>
            <div className="mx-auto text-base font-xlleading-relaxed text-gray-800">
              <h3 className="mx-auto mt-4 mb-4 text-xl font-semibold text-black">
                Event Info
              </h3>
              <span className="mx-auto mt-4 mb-4 font-sans text-xl font-normal text-black">
                {documentToReactComponents(eventInfo)}
              </span>
            </div>
            <h3 className="mx-auto mt-4 mb-4 text-xl font-semibold text-black">
              Event Info
            </h3>{" "}
            <a
              target="_blank"
              href={eventWebUrl}
              onClick="window.open(this.href,'targetWindow','toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=350,height=250')"
              className="text-sbtOrange bg-sbtBlue border border-solid border-sbtOrange hover:bg-sbtOrange hover:text-white active:bg-sbtOrange font-normal w-40  text-xl px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1   ease-linear transition-all duration-150"
            >
              Register for our event!
            </a>
          </div>
          <div className="col-span-6 bg-white">
            <div className="aspect-w-16 aspect-h-9">
              {/* <IframeContainer event={event.fields} />  */}
              <iframe frameBorder="0" src={iFrameSrc} id={iFrameSysid}></iframe>
              {/* <iframe frameBorder="0" id={iFrameSysid}></iframe> */}
              {/* <script>
              var sandboxSrc = {iFrameSrc} + encodeURIComponent(document.location.toString()); 
              document.getElementById({iFrameSysid}).setAttribute('src', sandboxSrc); 
              </script>  */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
