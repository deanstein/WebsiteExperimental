const headerOptions = {
    container: {
        styleOverrides: {
            paddingLeftRight: '2rem',
            backgroundColor: 'gray',
            backgroundOpacity: '80%'
        }
    },
    logo: {
        show: true,
        src: './src/ui-modules/Header/img/defaultLogo.png',
        alt: 'A logo for this website',
        styleOverrides: {
            alignItems: 'center' /* vertically align the subtitle in the header */
        },
        subtitle: {
            show: false,
            text: 'An optional subtitle for this website'
        }
    },
    nav: {
        show: true,
        items: [
            {name: 'Home', page: 'home.html'}, 
            {name: 'About', page: 'about.html'}, 
            {name: 'Contact', page: 'contact.html'}
            ],
        styleOverrides: {
            alignItems: 'center', /* vertically align the navbar in the header */
            itemTextColor: 'white',
            itemTextHoverColor: 'white',
            itemBackgroundColor: 'darkGray',
            itemBackgroundColorHover: 'black'
        }
    }
}

export default headerOptions;