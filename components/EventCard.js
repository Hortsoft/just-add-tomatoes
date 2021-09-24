import Link from "next/link";
import Image from "next/image";

export default function EventCard({ event }) {
  const {
    eventTitle,
    eventDescription,
    eventDate,
    eventInfo,
    eventLink,
    heroImage,
    slug
  } = event.fields;

  return (
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
      <article className="overflow-hidden rounded-lg shadow-lg  hover:shadow-xl transition duration-200 max-w-sm border-b-8 border-transparent">
        <div className="border-b-4 m-0 p-0 border-transparent hover:border-sbtOrange">
          <Image
            src={"https:" + heroImage.fields.file.url}
            width={heroImage.fields.file.details.image.width}
            height={heroImage.fields.file.details.image.height}
            alt="Hi"
          />{" "}
        </div>
        {/* <Image
            src={"https:" + thumbnail.fields.file.url}
          width="200"
          height="200"
          alt=""
        />  */}
        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 className="text-lg tracking-tight hover:border-sbtOrange hover:text-sbtOrange ">
            {eventTitle}{" "}
          </h1>
        </header>
        <div className="flex items-center justify-between leading-tight p-2 md:p-4">
          <p className="text-sm py-11 align-text-middle">{eventDescription} </p>
        </div>
        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
          <Link href={"/events/" + slug}>
            <a>Click to view </a>
          </Link>{" "}
          <p className="text-sm py-11 align-text-bottom">{eventDate}</p>
        </footer>
      </article>
    </div>
  );
}
