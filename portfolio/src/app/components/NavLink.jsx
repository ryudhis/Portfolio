import { Link } from "react-scroll";
const NavLink = ({ href, title }) => {
  return (
    <Link
      to={href}
      smooth={true}
      duration={500}
      offset={-120}
      className="cursor-pointer block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavLink;
