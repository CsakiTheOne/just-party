import { useNavigate } from "react-router-dom";
import PartyCard from "../components/PartyCard";
import Button from "../components/base/Button";
import Card from "../components/base/Card";
import CircleButton from "../components/base/CircleButton";
import Screen from "../components/base/Screen";
import Party from "../model/Party";
import { useEffect, useState } from "react";
import Firestore from "../firebase/Firestore";
import loading from '../media/loading.gif';

export default function HomeScreen() {
    const navigate = useNavigate();
    const [parties, setParties] = useState<Array<Party>>([]);

    useEffect(() => {
        Firestore.getParties().then(newParties => setParties(newParties));
    }, []);

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
        {
            parties.length < 1 ? <div style={{ textAlign: 'center', }}>
                <img style={{ margin: 64, width: 128, }} src={loading} alt="" />
            </div> : <></>
        }
        {
            parties.map(party => <PartyCard
                style={{
                    margin: 8,
                }}
                party={party}
            />)
        }
    </Screen>;
}