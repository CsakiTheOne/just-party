import { useNavigate } from "react-router-dom";
import PartyCard from "../components/PartyCard";
import Button from "../components/base/Button";
import Card from "../components/base/Card";
import CircleButton from "../components/base/CircleButton";
import Screen from "../components/base/Screen";
import Party from "../model/Party";

export default function HomeScreen() {
    const navigate = useNavigate();

    return <Screen>
        <h1 style={{ margin: 8, textAlign: 'center', }}>
            Just Party!
        </h1>
        <Button
            style={{
                display: 'block',
                width: 'calc(100% - 16px)',
                margin: 8,
            }}
            onClick={() => navigate('about')}
        >
            Nyilvános Just Dance bulik, ahová bárki jöhet!
        </Button>
        <PartyCard
            style={{
                margin: 8,
            }}
            party={new Party('Induljon a nyár! (placeholder)')}
        />
    </Screen>;
}