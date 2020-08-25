import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <header className="container mx-auto flex flex-col justify-center lg:justify-between lg:flex-row py-2">
      <div className="self-center">
        <img src="/assets/logo.svg" />
      </div>
      <nav className="flex self-center">
        <NavbarItem text="Home />" active/>
        <NavbarItem text="About />" />
        <NavbarItem text="Projects />" />
        <NavbarItem text="Blog />" />
        <NavbarItem text="HowTo />" />
      </nav>
    </header >
  )
}