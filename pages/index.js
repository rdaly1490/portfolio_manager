import Link from 'next/link';

export default () => (
    <div>
        <h1>Home Page</h1>
        <Link href={'/dashboard'}><a>Go to dashboard</a></Link>
    </div>
);