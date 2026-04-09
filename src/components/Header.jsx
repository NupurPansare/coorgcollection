const Header = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-green-700">
        Coorg Collection
      </h1>

        <ul className="hidden md:flex gap-8 font-medium">
        <li>
         <a href="#home" className="hover:text-green-600">Home</a>
        </li>
        <li>
        <a href="#products" className="hover:text-green-600">Products</a>
        </li>
        <li>
        <a href="#about" className="hover:text-green-600">About</a>
        </li>
        <li>
        <a href="#contact" className="hover:text-green-600">Contact</a>
        </li>
        </ul>
    </nav>
  );
};

export default Header;