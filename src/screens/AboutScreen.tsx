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
            Go back
        </Button>
        <Card
            style={{
                margin: Theme.dimSpacing / 2,
            }}
        >
            <p style={{ marginBottom: 8, textAlign: 'justify' }}>
                <b>Hey everyone!</b> I'm Csáki and I like to dance!
                This is one of the best and most fun social activities
                people can take part in.
            </p>
            <p style={{ marginBottom: 8, textAlign: 'justify' }}>
                So I made this website where you can check out or even organize public Just Dance parties.
                This summer I plan to organize some of my own as well in some Hungarian cities.
            </p>
            <p style={{ textAlign: 'justify' }}>
                I'm just a Hungarian boyo, but don't worry, anyone can dance!
                On this site you can create your own events where others can join.
                So no matter where you are, Just Dance!
            </p>
        </Card>
        <Card
            style={{
                margin: Theme.dimSpacing / 2,
            }}
        >
            <h3 style={{ marginBottom: 8 }}>Contributors</h3>
            <p style={{ marginBottom: 8 }}>¯\_(ツ)_/¯</p>
            <Button
                style={{
                    display: 'block',
                    width: `calc(100% - ${Theme.dimSpacing}px)`,
                    margin: Theme.dimSpacing / 2,
                }}
                onClick={() => window.open('https://github.com/CsakiTheOne/just-party', '_blank')}
            >
                I want to help!
            </Button>
        </Card>
    </Screen>;
}