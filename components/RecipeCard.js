import Link from 'next/link'
import Image from 'next/image'

export default function RecipeCard({ blogpost }) {
    const { title, cookingTime, slug, heroImage } = blogpost.fields;
 
  return (
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        <article className="overflow-hidden rounded-lg shadow-lg  hover:shadow-xl transition duration-200 max-w-sm border-b-8 border-transparent">
<div className="border-b-4 m-0 p-0 border-transparent hover:border-sbtOrange">
  <Image
          src={'https:' + heroImage.fields.file.url}
          width={heroImage.fields.file.details.image.width}
          height={heroImage.fields.file.details.image.height}
          alt="Hi"
      
        />   </div>
         {/* <Image
            src={"https:" + thumbnail.fields.file.url}
          width="200"
          height="200"
          alt=""
        />  */}
        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg tracking-tight hover:border-sbtOrange hover:text-sbtOrange ">{title} </h1>
                   
          <p className="text-sm py-11 align-text-bottom">{cookingTime} mins to read</p> </header>
        
          <footer className="flex items-center justify-between leading-none p-2 md:p-4">
          <Link href={"/recipes/" + slug}>
            <a>Click to view recipe</a>
          </Link>
          </footer>

            </article>
            </div>
  );
}
