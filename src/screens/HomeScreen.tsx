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

export default function HomeScreen() {
    const navigate = useNavigate();
    const [parties, setParties] = useState<Array<Party>>([]);

    useEffect(() => {
        Firestore.getParties().then(newParties => setParties(newParties));
    }, []);

    return <Screen>
        <h1 style={{ margin: Theme.dimSpacing / 2, textAlign: 'center', }}>
            Just Party!
        </h1>
        <Button
            style={{
                display: 'block',
                width: 'calc(100% - 16px)',
                margin: Theme.dimSpacing / 2,
            }}
            onClick={() => navigate('about')}
        >
            Nyilvános Just Dance bulik, ahová bárki jöhet!
        </Button>
        <div style={{ margin: Theme.dimSpacing / 2, textAlign: 'center', }}>
            <span
                className="material-symbols-outlined"
                style={{ marginTop: '-12px', transform: 'translateY(12px)', marginLeft: Theme.dimSpacing / 2, marginRight: Theme.dimSpacing / 2, }}
                onClick={() => {
                    Theme.setDayNightTheme(Theme.getDayNightTheme() === 'light' ? 'dark' : 'light');
                    window.location.reload();
                }}
            >
                palette
            </span>
            {
                Theme.getPrimaryOptions().map(option => <CircleButton
                    style={{ marginLeft: Theme.dimSpacing / 2, marginRight: Theme.dimSpacing / 2, backgroundColor: option, }}
                    onClick={() => {
                        Theme.setPrimary(option);
                        window.location.reload();
                    }}
                ></CircleButton>)
            }
        </div>
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