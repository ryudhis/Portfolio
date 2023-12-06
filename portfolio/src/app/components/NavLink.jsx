const NavLink = ({ href, title }) => {
  const scrollToSection = (event) => {
    event.preventDefault();

    const targetId = event.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <a
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
      onClick={scrollToSection}
    >
      {title}
    </a>
  );
};

export default NavLink;
