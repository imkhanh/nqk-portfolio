import Link from 'next/link';

function Navbar() {
  return (
    <div className="">
      <Link href="/">NQK</Link>
      <div>
        <ul>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Posts</Link>
          </li>
          <li>
            <Link href="/">More</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
