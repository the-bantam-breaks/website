import moment from 'moment';

const SHOW_DATA = [{
    date: '2015-10-22',
    venueName: 'Iron Factory',
    venueUrl: 'http://ironfactoryinc.com/',
    city: 'Athens',
    state: 'GA',
    time: '9pm'
},
{
    date: '2016-04-15',
    venueName: "Smith's Olde Bar",
    venueUrl: 'http://www.smithsoldebar.com/',
    city: 'Atlanta',
    state: 'GA',
    ticketUrl: 'http://www.smithsoldebar.com/events-calendar/',
    time: '9pm'
},
{
    date: '2016-06-24',
    venueName: "Smith's Olde Bar",
    venueUrl: 'http://www.smithsoldebar.com/',
    city: 'Atlanta',
    state: 'GA',
    ticketUrl: 'http://www.smithsoldebar.com/events-calendar/',
    time: '9pm'
},
{
    date: '2016-08-04',
    venueName: 'The Caledonia Lounge',
    venueUrl: 'http://caledonialounge.com/',
    city: 'Athens',
    state: 'GA',
    time: '9pm'
},
{
    date: '2016-09-22',
    venueName: "Smith's Olde Bar",
    venueUrl: 'http://www.smithsoldebar.com/',
    city: 'Atlanta',
    state: 'GA',
    ticketUrl: 'http://www.smithsoldebar.com/events-calendar/',
    time: '9pm'
},
{
    date: '2016-10-15',
    venueName: 'Madlife',
    venueUrl: 'http://madlifestageandstudios.com/',
    city: 'Woodstock',
    state: 'GA',
    ticketUrl: 'http://madlifestageandstudios.ticketfly.com/',
    time: '2pm'
},
{
    date: '2016-11-05',
    venueName: 'Amici',
    venueUrl: 'http://amici-cafe.com/milledgeville.html',
    city: 'Milledgeville',
    state: 'GA',
    time: '10pm'
},
{
    date: '2017-01-28',
    venueName: 'Break Fest',
    venueUrl: 'https://www.facebook.com/events/1128587860573661/',
    city: 'Avondale Estates',
    state: 'GA',
    time: '1pm'
},
{
    date: '2017-03-04',
    venueName: 'Amici',
    venueUrl: 'http://amici-cafe.com/milledgeville.html',
    city: 'Milledgeville',
    state: 'GA',
    time: '10pm'
},
{
    date: '2017-03-26',
    venueName: 'Nophest',
    venueUrl: 'https://www.facebook.com/events/665740543599415/',
    city: 'Avondale Estates',
    state: 'GA',
    ticketUrl: 'https://www.gofundme.com/nophest-2017-earlybird-specials',
    time: '2pm'
},
{
    date: '2017-04-08',
    venueName: "Smith's Olde Bar",
    venueUrl: 'http://www.smithsoldebar.com/',
    city: 'Atlanta',
    state: 'GA',
    ticketUrl: 'http://www.smithsoldebar.com/events-calendar/',
    time: '9pm'
},
{
    date: '2017-04-21',
    venueName: "Venkman's - 500 Songs for Kids Benefit",
    venueUrl: 'http://venkmans.com/',
    city: 'Atlanta',
    state: 'GA',
    ticketUrl: 'http://venkmans.com/event/500-songs-for-kids-xi-3/',
    time: '8pm'
},
{
    date: '2017-06-08',
    venueName: "Smith's Olde Bar",
    venueUrl: 'http://www.smithsoldebar.com/',
    city: 'Atlanta',
    state: 'GA',
    ticketUrl: 'http://www.smithsoldebar.com/events-calendar/',
    time: '7pm'
}, {
    date: '2017-11-25',
    venueName: "Smith's Olde Bar",
    venueUrl: 'http://www.smithsoldebar.com/',
    city: 'Atlanta',
    state: 'GA',
    ticketUrl: 'http://www.smithsoldebar.com/events-calendar/',
    time: '7:30pm'
}, {
    date: '2018-01-18',
    venueName: 'The Earl',
    venueUrl: 'http://www.badearl.com/',
    city: 'Atlanta',
    state: 'GA',
    ticketUrl: 'http://www.badearl.com/schedule',
    time: '8:30pm'
},
{
    date: '2018-02-10',
    venueName: 'Amici',
    venueUrl: 'http://amici-cafe.com/milledgeville.html',
    city: 'Milledgeville',
    state: 'GA',
    time: '10pm'
},
{
    date: '2018-03-23',
    venueName: 'Tin Roof Cantina',
    venueUrl: 'http://tinroofcantina.com/',
    city: 'Atlanta',
    state: 'GA',
    time: '8pm'
},
{
    date: '2018-04-20',
    venueName: 'Vinyl - 500 Songs for Kids Benefit',
    venueUrl: 'http://www.centerstage-atlanta.com/shows/vinyl/',
    city: 'Atlanta',
    state: 'GA',
    ticketUrl: 'http://www.centerstage-atlanta.com/show/?id=2960&artist=500+SONGS+FOR+KIDS+XII',
    time: '7pm'
},
{
    date: '2018-05-02',
    venueName: 'Madlife - Battle of the Bands',
    venueUrl: 'http://madlifestageandstudios.com/',
    city: 'Woodstock',
    state: 'GA',
    ticketUrl: 'http://madlifestageandstudios.ticketfly.com/',
    time: '7:30pm'
},
{
    date: '2018-05-19',
    venueName: "Eddie's Attic",
    venueUrl: 'http://eddiesattic.com/',
    city: 'Decatur',
    state: 'GA',
    ticketUrl: 'https://www.ticketfly.com/purchase/event/1652996',
    time: '6pm'
},
{
    date: '2018-06-08',
    venueName: "Eddie's Attic - Amplify presents - Tom Petty vs. David Bowie (charity event)",
    venueUrl: 'http://eddiesattic.com/',
    city: 'Decatur',
    state: 'GA',
    ticketUrl: 'https://www.ticketfly.com/event/1690596?utm_medium=api',
    time: '6:30pm'
},
{
    date: '2018-10-06',
    venueName: 'The Alamo (w/ the Bitteroots)',
    venueUrl: 'http://thealamonewnan.com/',
    city: 'Newnan',
    state: 'GA',
    ticketUrl: 'https://www.facebook.com/events/414747959023743/',
    time: '8:30pm'
},
{
    date: '2018-11-0',
    venueName: "Smith's Olde Bar",
    venueUrl: 'http://www.smithsoldebar.com/',
    city: 'Atlanta',
    state: 'GA',
    ticketUrl: 'https://www.eventbrite.com/e/the-bitteroots-tickets-48103105684',
    time: '7pm'
}, {
    date: '2019-04-14',
    venueName: "Eddie's Attic - Amplify presents - Nirvana vs. Pearl Jam (charity event)",
    venueUrl: 'http://eddiesattic.com/',
    city: 'Decatur',
    state: 'GA',
    ticketUrl: 'https://www.ticketfly.com/purchase/event/1816881?utm_medium=api',
    time: '7pm'
}, {
    date: '2019-05-18',
    venueName: "Eddie's Attic (w/ The Bitteroots and friends 11th Anniversary",
    venueUrl: 'http://eddiesattic.com/',
    city: 'Decatur',
    state: 'GA',
    ticketUrl: 'https://www.ticketfly.com/purchase/event/1804906?utm_medium=api',
    time: '8:30pm'
},
{
    date: '2019-06-09',
    venueName: "Smith's Olde Bar - with Sub Radio & The Hipps",
    venueUrl: 'http://www.smithsoldebar.com/',
    city: 'Atlanta',
    state: 'GA',
    ticketUrl: 'https://www.eventbrite.com/e/sub-radio-tickets-59343188073',
    time: '7pm'
},
{
    date: '2019-06-22',
    venueName: 'Ridgefest at Little Tree',
    venueUrl: 'https://littletreeartstudios.com/music-studios/',
    city: 'Avondale Estates',
    state: 'GA',
    time: '2pm'
},
{
    date: '2019-09-09',
    venueName: 'Decatur FM Radio Interview',
    venueUrl: 'https://www.decaturfm.com/',
    cover: 'free - listen online',
    city: 'Decatur',
    state: 'GA',
    time: '9pm'
},
{
    date: '2019-10-04T20:00:00',
    venueName: 'Tin Roof Cantina',
    venueUrl: 'http://tinroofcantina.com/',
    city: 'Atlanta',
    state: 'GA',
    time: '8pm'
},
{
    date: '2019-10-12',
    venueName: 'Oakhurst Porchfest (2-3pm @ 113 N 4th Ave.)',
    venueUrl: 'https://www.oakhurstporchfest.org',
    city: 'Decatur',
    cover: 'free',
    state: 'GA',
    time: '2pm'
},
{
    date: '2020-10-15T20:30:00',
    venueName: 'Amplify Streaming Series - Live from Waller\'s Coffee',
    venueUrl: 'https://www.facebook.com/amplifymycommunity/',
    city: 'Decatur',
    cover: 'free',
    state: 'GA',
    time: '8:30pm - 9:30pm'
}];

const DATE_FORMAT = 'YYYY-MM-DDThh:mm:ss';

const decoratedShowData = (shows = []) => {
    return shows.map((show) => {
        const { date, time, ...restOfShow } = show;
        const isArchived = moment().isAfter(moment(date, DATE_FORMAT));
        const momentDate = moment(date, DATE_FORMAT);
        return {
            isArchived,
            day: momentDate.format('Do'),
            month: momentDate.format('MMM'),
            year: momentDate.format('YYYY'),
            weekday: momentDate.format('ddd'),
            ...time ? { time } : { time: momentDate.format('LT') },
            ...restOfShow
        }
    });
};

const dateSortAscending = (show1, show2) => {
    const date1 = moment(show1.date);
    const date2 = moment(show2.date);

    if (date1 > date2) return 1;
    if (date1 < date2) return -1;
    return 0;
};

export const getShowsArchive = () => {
    return decoratedShowData(SHOW_DATA).sort(dateSortAscending).reverse();
};

export const getUpcomingShows = () => {
    const yesterdayMoment = moment().startOf('day').subtract(1, 'day');
    const upcomingShows = SHOW_DATA.filter((s) => {
        const showDateMoment = moment(new Date(s.date));
        return showDateMoment.isAfter(yesterdayMoment);
    }).sort(dateSortAscending);

    return decoratedShowData(upcomingShows);
};
