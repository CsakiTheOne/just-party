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
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
            <h1 style={{ margin: Theme.dimSpacing / 2, }}>
                Just Party
            </h1>
            <div style={{ margin: Theme.dimSpacing / 2, }}>
                <span
                    className="material-symbols-outlined"
                    style={{ marginTop: '-12px', transform: 'translateY(12px)', marginLeft: Theme.dimSpacing / 4, marginRight: Theme.dimSpacing / 4, cursor: 'pointer', }}
                    onClick={() => {
                        Theme.setDayNightTheme(Theme.getDayNightTheme() === 'light' ? 'dark' : 'light');
                        window.location.reload();
                    }}
                >
                    palette
                </span>
                {
                    Theme.getPrimaryOptions().map(option => <CircleButton
                        style={{ marginLeft: Theme.dimSpacing / 4, marginRight: Theme.dimSpacing / 4, backgroundColor: option, }}
                        onClick={() => {
                            Theme.setPrimary(option);
                            window.location.reload();
                        }}
                    ></CircleButton>)
                }
            </div>
        </div>
        <Button
            style={{
                display: 'block',
                width: `calc(100% - ${Theme.dimSpacing}px)`,
                margin: Theme.dimSpacing / 2,
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
                    margin: Theme.dimSpacing / 2,
                }}
                party={party}
            />)
        }
    </Screen>;
}