import { Link, scroller } from "react-scroll";

const NavLink = ({ href, title }) => {
  const scrollTo = (offset) => {
    scroller.scrollTo("scroll-to-element", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
      offset: offset,
    });
  };
  return (
    <Link
      to={href}
      smooth={true}
      offset={0}
      duration={650}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white cursor-pointer"
      onClick={scrollTo()}
    >
      {title}
    </Link>
  );
};

export default NavLink;
