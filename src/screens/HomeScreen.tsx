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
import Auth from "../firebase/Auth";
import { CountryDropdown } from "react-country-region-selector";
import TopBar from "../components/TopBar";
import CountryField from "../components/base/CountryField";

export default function HomeScreen() {
    const navigate = useNavigate();
    const [isSetupNeeded, setIsSetupNeeded] = useState(false);
    const [parties, setParties] = useState<Array<Party>>([]);

    useEffect(() => {
        if (LocalStorage.getCountry() === null || LocalStorage.getCountry()?.length! < 2) {
            setIsSetupNeeded(true);
            return;
        }
        Firestore.getParties().then(newParties => setParties(newParties));
    }, [navigate]);

    return <Screen>
        <TopBar />
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
        <Button
            style={{
                display: 'block',
                width: `calc(100% - ${Theme.dimSpacing}px)`,
                margin: Theme.dimSpacing / 2,
            }}
            onClick={() => window.open('https://calendar.google.com/calendar/u/0?cid=N2RjMzI2NzhjNWUwNjRmZTQyYjQwOTU0ZWNmMTE3NjQxOTY2ZmRlMGJjODU3MmQzMTYyNWJhYzkxNDIxN2JhMkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t', '_blank')}
        >
            Join Google Calendar for Csáki's events
        </Button>
        {
            isSetupNeeded ?
                <Card style={{ margin: Theme.dimSpacing / 2, }}>
                    <h3 style={{ margin: Theme.dimSpacing / 2, }}>Country</h3>
                    <CountryField
                        style={{
                            width: '100%',
                        }}
                        value=''
                        onChange={() => {
                            window.location.reload();
                        }}
                    />
                </Card> : <>
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
                    {
                        Auth.auth.currentUser ?
                            <Button
                                style={{
                                    display: 'block',
                                    width: `calc(100% - ${Theme.dimSpacing}px)`,
                                    margin: Theme.dimSpacing / 2,
                                }}
                                onClick={() => navigate('party/new')}
                            >
                                <span className="material-symbols-outlined">add</span> Create party
                            </Button> : <></>
                    }
                </>
        }
        <Card style={{ margin: Theme.dimSpacing / 2, }}>
            <h3 style={{ marginBottom: Theme.dimSpacing / 2, }}>Did you know?</h3>
            <p>
                You can install this website as an app.
                Just add it to your home screen and it will work like a regular phone application.
            </p>
        </Card>
    </Screen>;
}