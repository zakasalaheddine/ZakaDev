import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <header className="container mx-auto flex flex-col justify-center lg:justify-between lg:flex-row py-2">
      <div className="self-center">
        <img src="/assets/logo.svg" />
      </div>
      <nav className="flex self-center">
        <NavbarItem text="Home />" active href="/" />
        <NavbarItem text="About />" href="/about" />
        <NavbarItem text="Projects />" href="/" />
        <NavbarItem text="Blog />" href="/" />
        <NavbarItem text="HowTo />" href="/" />
      </nav>
    </header >
  )
}