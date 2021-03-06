//   GlobalStyle

// Ici est géré la feuille de style globale pour Radium et les différents styles de chaques pages.

export const GraphChart = {
    color: {
        dark: '#4a4a4a',
        light: '#e3e3e3',
        onLight: '#4a4a4a',
        onDark: '#e3e3e3',
        globalBackground: '#f3f3f3'
    },
    font: {
        mainFont: "'Alegreya Sans', sans-serif",
    }

};

export const GlobalStyle = {

    h2: {
        fontFamily: "'Playfair Display', serif",
        fontSize: '28px',
        display: 'block',
        color: GraphChart.color.onLight,
        textAlign: 'center',
        letterSpacing: '1px'
    },

    h3: {
        fontFamily: "'Alegreya Sans', sans-serif",
        fontSize: '24px',
        lineHeight: '30px',
        color: GraphChart.color.onLight,
        display: 'block',
        textAlign: 'justify',
        textAlignLast: 'center',
        fontWeight: 300
    },
    hr: {
        width: '120px',
        border: '1px solid ' + GraphChart.color.onLight
    },

    p: {
        textAlign: 'justify',
        fontSize: '18px',
        textAlignLast: 'center',
        lineHeight: '26px',
        fontFamily: GraphChart.font.mainFont,
        color: GraphChart.color.onLight,
    },
    aSocial: {
        display: 'inline-block',
        width: '35px',
        height: '35px',
        margin: '5px',
        opacity: '0.5',
        transition: '0.1s',
        ':hover': {
            opacity: '0.9'
        }
    },

};