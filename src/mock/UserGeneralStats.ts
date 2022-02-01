import { IStatsToday, IOverViewStats } from '../constants/index';

export const userStatsToday: IStatsToday[] = [
    {
        user: '@nathanf',
        stats: '1967',
        icon: '/images/icon-facebook.svg',
        subject: 'Followers',
        positive: true,
        statsToday: '12 Today'
    },
    {
        user: '@nathanf',
        stats: '1044',
        icon: '/images/icon-twitter.svg',
        subject: 'Followers',
        positive: true,
        statsToday: '99 Today'
    },
    {
        user: '@realnathanf',
        stats: '11k',
        icon: '/images/icon-instagram.svg',
        subject: 'Followers',
        positive: true,
        statsToday: '1099 Today'
    },
    {
        user: 'Nathan F.',
        stats: '6239',
        icon: '/images/icon-youtube.svg',
        subject: 'Subscribers',
        positive: false,
        statsToday: '144 Today'
    }
];

export const overViewStats: IOverViewStats[] = [
    {
        subject: 'Page Views',
        icon: '/images/icon-facebook.svg',
        statsToday: '67',
        positive: true,
        percent: '3%'
    },
    {
        subject: 'Likes',
        icon: '/images/icon-facebook.svg',
        statsToday: '62',
        positive: false,
        percent: '2%'
    },
    {
        subject: 'Likes',
        icon: '/images/icon-instagram.svg',
        statsToday: '6462',
        positive: true,
        percent: '2267%'
    },
    {
        subject: 'Profile Views',
        icon: '/images/icon-instagram.svg',
        statsToday: '62k',
        positive: true,
        percent: '1376%'
    },
    {
        subject: 'Retweets',
        icon: '/images/icon-twitter.svg',
        statsToday: '117',
        positive: true,
        percent: '303%'
    },
    {
        subject: 'Likes',
        icon: '/images/icon-twitter.svg',
        statsToday: '607',
        positive: true,
        percent: '63%'
    },
    {
        subject: 'Likes',
        icon: '/images/icon-youtube.svg',
        statsToday: '107',
        positive: false,
        percent: '19%'
    },
    {
        subject: 'Total Views',
        icon: '/images/icon-youtube.svg',
        statsToday: '1407',
        positive: false,
        percent: '12%'
    }
]