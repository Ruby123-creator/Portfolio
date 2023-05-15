import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery from "../hooks/useMediaQuery";

const Link = ({ page, selectedPage, setSelectedPage }) => {
  // console.log("about")
  const lowerCasePage = page.toLowerCase();
  // console.log(lowerCasePage)
  // console.log(selectedPage)
  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-red" : ""
      } hover:text-red transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => {
        // console.log("hello about")
        setSelectedPage(lowerCasePage)}}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-cyan-500";

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold">Rp</h4>

        {/* DESKTOP NAV */}
        {isDesktop ? (
          <div className="flex justify-between gap-16 font-opensans text-l font-semibold">
            <Link key={"home"}
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
             <Link  key={"about"}
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link  key={"skills"}
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            
            <Link key={"projects"}
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            
            <Link
              page="Contact"  key={"contact"}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
           
          </div>
        ) : (
          <button
            className="rounded bg-red p-2 text-3xl"
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
<i className="fa-solid fa-bars-staggered" key={"menu-open"}></i>
          </button>
        )}

        {/* MOBILE MENU POPUP */}
        {!isDesktop && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-blue w-[300px]">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12 text-2xl">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <i className="fa-solid fa-xmark" key={"menu-close"}></i>              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue">
              <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="About"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <Link
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              
              <Link
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              
              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
