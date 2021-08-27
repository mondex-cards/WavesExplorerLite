import React from 'react';

import adv1 from '../images/mondex/adv1.png';
import adv2 from '../images/mondex/adv2.png';
import adv_mondex_online from '../images/mondex/mondex_online_adv.png';
import adv_sistemkoin from '../images/mondex/sistemKoin_adv.jpg';
import adv_binance from '../images/mondex/binance_adv.jpg';
import adv_bitibu from '../images/mondex/bitibu_adv.png';
import adv_woodland from '../images/mondex/woodland_adv.jpg';

const advs = [
    {
        image: adv1,
        url: 'http://www.mondextel.com/'
    },
    {
        image: adv2,
        url: 'https://www.clbwallet.com/'
    },
    {
        image: adv_mondex_online,
        url: 'http://mondex.online/'
    }, {
        image: adv_sistemkoin,
        url: 'https://sistemkoin.com/'
    },
    {
        image: adv_binance,
        url: 'https://info.binance.com/en/currencies/clbcoin'
    },
    {
        image: adv_bitibu,
        url: 'https://bitibu.com/'
    },
    {
        image: adv_woodland,
        url: 'http://woodland.angeles-city-hotel.com/en/'
    }
];

const Adv = () => {
    return (
        <div className={"adv"}>
            {advs.map(item =>
                (<div className={"adv-item"}><a key={item.id} href={item.url} target="_blank"><img
                    src={item.image}/></a></div>))}
        </div>
    );
};

export default Adv;
