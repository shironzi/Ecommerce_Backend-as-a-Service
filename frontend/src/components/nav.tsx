import { CgProfile } from "react-icons/cg";

function Nav() {
  return (
    <nav className="space-x-96 mx-auto flex w-full items-center justify-between p-6 lg:px-8">
      <h3 className="mr-auto">Shironzi</h3>
      <div className="flex space-x-4 mx-auto">
        <a href="">Laptops</a>
        <a href="">Desktop PCs</a>
        <a href="">Networking Devices</a>
        <a href="">Printers & Scanners</a>
        <a href="">PC Parts</a>
        <a href="">All Other Products</a>
        <a href="">Repairs</a>
        <a href="">Our Deals</a>
      </div>
      <div className="ml-auto">
        <CgProfile size={"2.5rem"} />
      </div>
    </nav>
  );
}

export default Nav;
