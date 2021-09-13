import Link from 'next/link' 


export default function MenuLink({ blogpost }) {
    const { id, title, slug } = blogpost.fields;
 
  return (
    <div>
           <Link className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white" id={id} href={"/recipes/" + slug}>
            <a> {title}</a>
          </Link>
          </div>   
  )
}
