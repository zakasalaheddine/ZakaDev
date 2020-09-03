import { NavigationLink } from "./styled-components/NavigationLink";
import Link from 'next/link'

export default function NavbarItem({ text, href, active }) {
  return (
    <Link href={href}>
      <NavigationLink active={active} className="px-2 text-sm lg:text-xl text-center font-bold self-center">
        {text}
      </NavigationLink>
    </Link>
  )
} 