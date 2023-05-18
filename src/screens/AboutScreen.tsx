import { useNavigate } from "react-router-dom";
import Card from "../components/base/Card";
import Screen from "../components/base/Screen";
import Button from "../components/base/Button";
import Theme from "../theme/Theme";

export default function AboutScreen() {
    const navigate = useNavigate();

    return <Screen>
        <h1 style={{ margin: Theme.dimSpacing / 2, textAlign: 'center', }}>
            Just Party!
        </h1>
        <Button
            style={{
                display: 'block',
                width: `calc(100% - ${Theme.dimSpacing}px)`,
                margin: Theme.dimSpacing / 2,
            }}
            onClick={() => navigate('/')}
        >
            Vissza
        </Button>
        <Card
            style={{
                margin: Theme.dimSpacing / 2,
            }}
        >
            <p style={{ marginBottom: 8, textAlign: 'justify' }}>
                <b>Sziasztok!</b> Csáki vagyok és szeretek táncolni.
                Az, hogy tudok-e az más kérdés,
                de attól még mindig ezt tartom a legjobb és
                legszórakoztatóbb közösségi tevékenységnek.
            </p>
            <p style={{ marginBottom: 8, textAlign: 'justify' }}>
                Szóval csináltam ezt az oldalt,
                ahol nyilvános Just Dance bulikat nézhettek ki magatoknak.
                Idén nyáron szeretnék szervezni több ilyen kis eseményt
                Várpalotán, Veszprémben és talán más helyeken is, mint például
                Fehérváron, Zalakaroson, stb.
            </p>
            <p style={{ textAlign: 'justify' }}>
                Ahová nem sikerül eljutnom, ott sem kell aggódni.
                Ezen az oldalon szeretnék lehetőséget adni <b>másoknak is</b>,
                hogy megszervezzék a saját utcai Just Dance bulijukat.
                De amíg dolgozom ezen, mindenkit bíztatok,
                hogy jöjjetek az eseményekre, amik nektek közel vannak és
                szervezzetek sok bulit a haverokkal! :D
            </p>
        </Card>
        <Card
            style={{
                margin: Theme.dimSpacing / 2,
            }}
        >
            <h3 style={{ marginBottom: 8 }}>Közreműködők</h3>
            <p style={{ marginBottom: 8 }}>¯\_(ツ)_/¯</p>
            <Button
                style={{
                    display: 'block',
                    width: `calc(100% - ${Theme.dimSpacing}px)`,
                    margin: Theme.dimSpacing / 2,
                }}
                onClick={() => window.open('https://github.com/CsakiTheOne/just-party', '_blank')}
            >
                Segíteni szeretnék
            </Button>
        </Card>
    </Screen>;
}