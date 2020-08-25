import { NavigationLink } from "./styled-components/NavigationLink";

export default function NavbarItem({ text, href, active }) {
  return (
    <NavigationLink active={active} href="#" className="px-2 text-center font-bold self-center">{text}</NavigationLink>
  )
} 