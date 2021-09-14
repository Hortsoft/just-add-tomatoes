import { createClient } from "contentful";
import MenuLink from "../components/MenuLink";
import { Menu } from '@headlessui/react'

export async function getStaticProps() {
  const client = createClient({
    space: "8s27tytzwtrj",
    accessToken: "HjT_z6HggNCGS1sG0lmq-uwXpC3ydF_jr73-70w67NU",
  });

  const res = await client.getEntries({ content_type: "blogPost" });

  return {
    props: {
      blogposts: res.items,
      revalidate: 1,
    },
  };
}

export default function MenuList({ blogposts }) {
  return (
    <div x-data="{ dropdownOpen: true }" className="relative   inline-flex my-32">
    <div x-show="dropdownOpen" className="fixed inset-0 h-full w-full z-10">
      <div
        x-show="dropdownOpen"
        className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20"
      >
        {blogposts.map((blogpost) => (
          <MenuLink key={blogpost.sys.id} blogpost={blogpost} />
        ))}
      </div>
       </div>
       <Menu>
      <Menu.Button>More</Menu.Button>
      <Menu.Items>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && 'bg-blue-500'}`}
              href="/account-settings"
            >
              Account settings
            </a>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${active && 'bg-blue-500'}`}
              href="/account-settings"
            >
              Documentation
            </a>
          )}
        </Menu.Item>
        <Menu.Item disabled>
          <span className="opacity-75">Invite a friend (coming soon!)</span>
        </Menu.Item>
      </Menu.Items>
    </Menu>
    </div>
    
  );
}
