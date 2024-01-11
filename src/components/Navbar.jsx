import logo from "../assets/icons/logo.svg";

const Navbar = () => {
  return (
    <nav>
      <div>
        <div>
          <a href="/">
            <img src={logo} alt="" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
