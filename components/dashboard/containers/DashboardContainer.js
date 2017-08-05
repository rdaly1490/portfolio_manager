import {Component} from 'react';
import Link from 'next/link';

//components
import DashboardMainDisplay from '../components/DashboardMainDisplay';
import Tabs from '../components/Tabs';

//styles
import stylesheet from 'styles/dashboard.scss'

export default class DashboardContainer extends Component {
    render() {
        return (
            <div>
                <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
                <div>Welcome to next.js!</div>
                <Link href={'/coin?symbol=btc'}><a>Check out BTC</a></Link>
                <DashboardMainDisplay />
                <Tabs />
            </div>
        )
    }
}