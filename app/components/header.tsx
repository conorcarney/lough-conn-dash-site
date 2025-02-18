const Header = () => {
  return (
    <header className="w-full p-4 flex flex-col items-center border-b">
      <h1 className="text-3xl font-bold mb-4">Lough Conn Dash</h1>
      <nav>
        <ul className="flex gap-6">
          <li>
            <a href="/" className="hover:text-gray-600 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-gray-600 transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header