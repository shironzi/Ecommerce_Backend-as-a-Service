import { CgProfile } from "react-icons/cg";

function Nav() {
  return (
    <nav className="flex justify-between px-40 py-5 items-center bg-gradient-to-r">
      <a href=""><h1 className="font-explore text-3xl font-semibold">Shironzi</h1></a>
      <div className="flex justify-between space-x-9 items-center">
        <a className="font-medium" href="">Laptops</a>
        <a className="font-medium" href="">Desktop PCs</a>
        <a className="font-medium" href="">Networking Devices</a>
        <a className="font-medium" href="">Printers & Scanners</a>
        <a className="font-medium" href="">PC Parts</a>
        <a className="font-medium" href="">All Other Products</a>
        <a className="font-medium" href="">Repairs</a>
        <a className="border-solid border-2 blue-border rounded-full px-6 py-1 blue font-medium " href="">Our Deals</a>
      </div>
      <div className="">
        <CgProfile size={"2.5rem"} />
      </div>
    </nav>
  );
}

export default Nav;
