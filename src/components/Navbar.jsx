import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <header className="container mx-auto flex justify-between py-2">
      <div className="flex self-center">
        <img src="/assets/logo.svg" />
      </div>
      <nav className="flex">
        <NavbarItem text="Home />" active/>
        <NavbarItem text="About />" />
        <NavbarItem text="Projects />" />
        <NavbarItem text="Blog />" />
        <NavbarItem text="HowTo />" />
      </nav>
    </header >
  )
}