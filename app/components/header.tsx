import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full p-4 flex flex-col items-center border-b">
      <h1 className="text-3xl font-bold mb-4">Lough Conn Dash</h1>
      <nav>
        <ul className="flex gap-6">
          <li>
            <Link href="/" className="hover:text-gray-600 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-600 transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header