import Link from 'next/link';

const Navbar = () => (
    <nav>
        <ul>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/features'>Features</Link></li>
            <li><Link href='/games'>Games</Link></li>
            <li><Link href='/specs'>Devices</Link></li>
            <li><Link href='/support'>Support</Link></li>
            <li><Link href='/purchase'>Store</Link></li>
            <li><Link href='/community'>Community</Link></li>
            <li><Link href='/faq'>About</Link></li>
        </ul>
    </nav>
);

export default Navbar;