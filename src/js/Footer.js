import React from 'react';

const socialLinks = [{
    id: 'github',
    url: 'https://github.com/METANOBLE'
} , {
    id: 'twitter',
    url: 'https://twitter.com/MetanobleQfree'
}, {
    id: 'facebook',
    url: 'https://www.facebook.com/profile.php?id=61554616127775&locale=ko_KR'
}, {
    id: 'bitcoin',
    url: 'https://bitcointalk.org/index.php?topic=5479972'
}, {
    id: 'telegram',
    url: 'https://t.me/+M50WgWe7XXE1YTI1'
}, {
    id: 'reddit',
    url: 'https://www.reddit.com/user/METANOBLE'
}];

const Footer = ({version}) => {
    return (
        <div className="menu-footer">
            <div>Version: {version}</div>
            <div>QFree Team</div>
            <div>
                {socialLinks.map(item =>
                    (<a key={item.id} className={`social ${item.id}`} href={item.url} target="_blank"></a>))}
            </div>
            <div>
                <a className="fade" href="https://qfree.kr/" target="_blank">qfree.kr</a>
            </div>
        </div>
    );
};

export default Footer;
