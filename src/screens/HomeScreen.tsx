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
import Theme from "../theme/Theme";
import LocalStorage from "../data/Local";

export default function HomeScreen() {
    const navigate = useNavigate();
    const [parties, setParties] = useState<Array<Party>>([]);

    useEffect(() => {
        if (LocalStorage.getCountry() === null || LocalStorage.getCountry()?.length! < 2) {
            navigate('/settings');
            return;
        }
        Firestore.getParties().then(newParties => setParties(newParties));
    }, [navigate]);

    return <Screen>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
            <h1 style={{ margin: Theme.dimSpacing / 2, }}>
                Just Party
            </h1>
            <CircleButton
                style={{ margin: Theme.dimSpacing / 2, }}
                onClick={() => navigate('/settings')}
            >
                Settings
            </CircleButton>
        </div>
        <Button
            style={{
                display: 'block',
                width: `calc(100% - ${Theme.dimSpacing}px)`,
                margin: Theme.dimSpacing / 2,
            }}
            onClick={() => navigate('about')}
        >
            Public Just Dance parties where anyone can join!
        </Button>
        {
            parties.length < 1 ? <div style={{ textAlign: 'center', }}>
                <img style={{ margin: 64, width: 128, }} src={loading} alt="" />
            </div> : <></>
        }
        {
            parties.map(party => <PartyCard
                style={{
                    margin: Theme.dimSpacing / 2,
                }}
                party={party}
            />)
        }
    </Screen>;
}