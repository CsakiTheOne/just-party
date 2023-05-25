import { useNavigate } from "react-router-dom";
import Button from "../components/base/Button";
import Card from "../components/base/Card";
import Screen from "../components/base/Screen";
import { useEffect, useState } from "react";
import Theme from "../theme/Theme";
import Auth from "../firebase/Auth";
import Firestore from "../firebase/Firestore";
import TextField from "../components/base/TextField";
import LocalStorage from "../data/Local";
import Profile from "../model/Profile";

export default function NewPartyScreen() {
    const navigate = useNavigate();
    const [profile, setProfile] = useState(new Profile());

    useEffect(() => {
        if (Auth.auth.currentUser === null) {
            alert('You are not logged in!');
            navigate('/');
            return;
        }
        Firestore.getProfile(Auth.auth.currentUser.uid)
            .then(newProfile => {
                setProfile(newProfile);
                if (!newProfile.isOrganizer) {
                    alert('You are not an organizer!');
                    navigate('/');
                }
            })
    }, [navigate]);

    return <Screen>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
            <h1 style={{ margin: Theme.dimSpacing / 2, }}>
                Just Party
            </h1>
        </div>
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
        <Card style={{ margin: Theme.dimSpacing / 2, }}>
            <h3 style={{ margin: Theme.dimSpacing / 2, }}>New party</h3>
            <p style={{ margin: Theme.dimSpacing / 2, }}>
                Country: {LocalStorage.getCountry()}
            </p>
            <p style={{ margin: Theme.dimSpacing / 2, }}>
                Organizer: {profile.displayName}
            </p>
            <TextField
                hint='Title'
                value={''}
                onChange={(e: string) => { }}
                style={{
                    margin: Theme.dimSpacing / 2,
                    width: `calc(100% - ${Theme.dimSpacing}px)`,
                }}
            />
            <TextField
                hint='Description'
                value={''}
                onChange={(e: string) => { }}
                style={{
                    margin: Theme.dimSpacing / 2,
                    width: `calc(100% - ${Theme.dimSpacing}px)`,
                }}
            />
            <TextField
                hint='Time'
                value={''}
                onChange={(e: string) => { }}
                style={{
                    margin: Theme.dimSpacing / 2,
                    width: `calc(100% - ${Theme.dimSpacing}px)`,
                }}
            />
            <TextField
                hint='Place'
                value={''}
                onChange={(e: string) => { }}
                style={{
                    margin: Theme.dimSpacing / 2,
                    width: `calc(100% - ${Theme.dimSpacing}px)`,
                }}
            />
            <select
                style={{
                    display: 'block',
                    margin: Theme.dimSpacing / 2,
                    width: `calc(100% - ${Theme.dimSpacing}px)`,
                }}
            >
                <option>Select a game...</option>
            </select>
            <label
                style={{
                    display: 'block',
                    margin: Theme.dimSpacing / 2,
                    width: `calc(100% - ${Theme.dimSpacing}px)`,
                }}
            >
                <input type="checkbox" />
                <span style={{ marginLeft: Theme.dimSpacing / 2, }}>
                    Unlimited
                </span>
            </label>
        </Card>
    </Screen>;
}