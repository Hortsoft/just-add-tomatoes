import Link from 'next/link' 


export default function MenuLink({ blogpost }) {
    const { id, title, slug } = blogpost.fields;
 
  return (
    <div>
           <Link  id={id} href={"/recipes/" + slug}>
            <a className="block px-3 py-2 hover:bg-gray-200"> {title}</a>
          </Link>
          </div>   
  )
}
