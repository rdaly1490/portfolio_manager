import Link from 'next/link';

export default props => {
    return (
        <div>
            <h1>Coin is: {props.url.query.symbol}</h1>
            <Link href={'dashboard'}><a>Go back</a></Link>
        </div>
    );
}