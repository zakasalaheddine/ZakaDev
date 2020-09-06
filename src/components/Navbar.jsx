import NavbarItem from "./NavbarItem";
import { useRouter } from 'next/router'

const Menu = [
  { text: "Home />", path: "/" },
  { text: "About />", path: "/about" },
  { text: "Projects />", path: "/projects" },
]

export default function Navbar() {
  const router = useRouter();
  return (
    <header className="container mx-auto flex flex-col justify-center lg:justify-between lg:flex-row py-2">
      <div className="self-center">
        <img src="/assets/logo.svg" />
      </div>
      <nav className="flex self-center">
        {
          Menu.map((item, idx) => (
            <NavbarItem key={idx} text={item.text} active={router.asPath === item.path} href={item.path} />
          ))
        }
      </nav>
    </header >
  )
}