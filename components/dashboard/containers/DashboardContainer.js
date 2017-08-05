import {Component} from 'react';
import Link from 'next/link';
import axios from 'axios';

//components
import DashboardMainDisplay from '../components/DashboardMainDisplay';
import Tabs from '../components/Tabs';

//styles
import stylesheet from 'styles/dashboard.scss'

export default class DashboardContainer extends Component {

    _getData() {
        axios.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=ETH&tsyms=BTC,USD,EUR&ts=1452680400')
            .then(({data}) => console.log(data));
    }
    render() {
        return (
            <div>
                <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                <button onClick={this._getData}>Get Data</button>
                <Link href={'/coin?symbol=btc'}><a>Check out BTC</a></Link>
                <DashboardMainDisplay />
                <Tabs />
            </div>
        )
    }
}