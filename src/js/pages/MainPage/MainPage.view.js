import React from 'react';

import {RoutedNetworkInfoContainer} from './NetworkInfo.container';
import {RoutedLastBlockListContainer} from './LastBlockList.container';
import {RoutedUnconfirmedTxListContainer} from './UnconfirmedTxList.container';

import EventBuilder from '../../shared/analytics/EventBuilder';
import ServiceFactory from '../../services/ServiceFactory';

export class MainPage extends React.Component {
    componentDidMount() {
        const event = new EventBuilder().main().events().show().build();
        ServiceFactory.global().analyticsService().sendEvent(event);
    }

    render() {
        return (<div className="content card">
            {/*<div className="info-box">
                    <RoutedNetworkInfoContainer />
                </div>*/}
            <div className="general-info">
                <p>
                    <a href={"https://github.com/METANOBLE"} target={"_blank"}><span style={{fontWeight: "strong"}}>메타노블 SNS 링크 (Github)</span></a>
                </p>
                <p><a href={"https://twitter.com/MetanobleQfree"}
                      target={"_blank"}><span style={{fontWeight: "strong"}}>Twitter(X)</span></a>
                </p>
                <p>
                    <a href={"https://www.facebook.com/profile.php?id=61554616127775&locale=ko_KR"}
                       target={"_blank"}><span style={{fontWeight: "strong"}}>Facebook</span></a>
                </p>
                <p>
                    <a href={"https://bitcointalk.org/index.php?topic=5479972"}
                       target={"_blank"}><span style={{fontWeight: "strong"}}>BITCOIN TALK</span></a>
                </p>
                <p>
                    <a href={"https://www.reddit.com/user/METANOBLE"}
                       target={"_blank"}><span style={{fontWeight: "strong"}}>REDDIT</span></a>
                </p>
                <p>
                    <a href={"https://t.me/+M50WgWe7XXE1YTI1"}
                       target={"_blank"}><span style={{fontWeight: "strong"}}>TELEGRAM</span></a>
                </p>
            </div>
            <div className="grid grid-wrap">
                <div className="column-6 column-sm-12">
                    <RoutedLastBlockListContainer/>
                </div>
                <div className="column-6 column-sm-12">
                    <RoutedUnconfirmedTxListContainer/>
                </div>
            </div>
        </div>);
    }
}
