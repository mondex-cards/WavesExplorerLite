import React from 'react';

const socialLinks = [{
    id: 'github',
    url: 'https://github.com/coinloanbank'
} , {
    id: 'twitter',
    url: 'https://twitter.com/clbcoin'
}, {
    id: 'facebook',
    url: 'https://www.facebook.com/coinloanbank'
}, {
    id: 'bitcoin',
    url: 'https://bitcointalk.org/index.php?topic=4409236.0'
}, {
    id: 'telegram',
    url: 'https://t.me/coinloanbank'
}, {
    id: 'reddit',
    url: 'https://www.reddit.com/user/CLBcoin/'
}];

const Footer = ({version}) => {
    return (
        <div className="menu-footer">
            <div>Version: {version}</div>
            <div>CLB Team</div>
            <div>
                {socialLinks.map(item =>
                    (<a key={item.id} className={`social ${item.id}`} href={item.url} target="_blank"></a>))}
            </div>
            <div>
                <a className="fade" href="https://www.coinloanbank.com/" target="_blank">www.coinloanbank.com</a>
            </div>
        </div>
    );
};

export default Footer;
