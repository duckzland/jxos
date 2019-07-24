/**
 * @type {{typography: {primary: string, secondary: string}, color: {accent: number, alpha: number, primary: {dark: string, main: string, light: string}, secondary: {dark: string, main: string, light: string}, tertiary: {dark: string, main: string, light: string}, heading: {main: string}, text: {main: string}, link: {dark: string, main: string, light: string}, background: {dark: string, main: string, light: string}}, animation: {time: number, stagger: number}}}
 */

module.exports = {
    typography: {
        primary: 'Orbitron, sans-serif',
        secondary: 'Electrolize, sans-serif'
    },
    color: {
        accent: 0.2,
        alpha: 0.5,
        primary: {
            dark: '#bbbbbb',
            main: '#ff6600',
            light: '#ffffff'
        },
        secondary: {
            dark: '#964519',
            main: '#fb8b33',
            light: '#ff7900'
        },
        tertiary: {
            dark: 'rgb(181, 5, 5)',
            main: '#964519',
            light: '#feec67'
        },
        heading: {
            main: '#eeeeee'
        },
        text: {
            main: '#cccccc'
        },
        link: {
            dark: '#ff5a00',
            main: '#964519',
            light: '#964519'
        },
        gradient: {
            orange_one: 'url(#orange-one)'
        },
        background: {
            dark: '#050608',
            main: '#050608',
            light: '#3a1f00'
        }
    },
    animation: {
        time: 250,
        stagger: 50
    }
};
