import { useNavigate } from "react-router-dom";
import Button from "../components/base/Button";
import Card from "../components/base/Card";
import CircleButton from "../components/base/CircleButton";
import Screen from "../components/base/Screen";
import { useEffect, useState } from "react";
import Theme from "../theme/Theme";
import { CountryDropdown } from "react-country-region-selector";
import LocalStorage from "../data/Local";
import Auth from "../firebase/Auth";
import TextField from "../components/base/TextField";
import Profile from "../model/Profile";
import Firestore from "../firebase/Firestore";

export default function SettingsScreen() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(Auth.auth.currentUser !== null);
    const [profile, setProfile] = useState(new Profile());
    const [country, setCountry] = useState(LocalStorage.getCountry() ? LocalStorage.getCountry()! : '');

    useEffect(() => {
        if (isLoggedIn) {
            Firestore.getProfile(Auth.auth.currentUser!.uid)
                .then(newProfile => setProfile(newProfile));
        }
    }, [isLoggedIn]);

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
            <h3 style={{ margin: Theme.dimSpacing / 2, }}>Account</h3>
            <CircleButton
                style={{
                    margin: Theme.dimSpacing / 2,
                    width: `calc(100% - ${Theme.dimSpacing}px)`,
                }}
                onClick={() => {
                    if (isLoggedIn) {
                        Auth.logout();
                        setIsLoggedIn(false);
                    }
                    else {
                        Auth.loginWithPopup()
                            .then(user => setIsLoggedIn(true));
                    }
                }}
            >
                {isLoggedIn ? 'Log out' : 'Log in'}
            </CircleButton>
            {
                isLoggedIn ? <>
                    <TextField
                        style={{
                            margin: Theme.dimSpacing / 2,
                            width: `calc(100% - ${Theme.dimSpacing}px)`,
                        }}
                        hint={'Name'}
                        value={profile.displayName}
                        onChange={(e: string) => {
                            const newProfile = { ...profile, displayName: e };
                            setProfile(newProfile);
                            Firestore.setProfile(newProfile);
                        }}
                    />
                </> : <></>
            }
        </Card>
        <Card style={{ margin: Theme.dimSpacing / 2, }}>
            <h3 style={{ margin: Theme.dimSpacing / 2, }}>Country</h3>
            <CountryDropdown
                value={country}
                onChange={e => {
                    setCountry(e);
                    LocalStorage.setCountry(e);
                }}
            />
        </Card>
        <Card style={{ margin: Theme.dimSpacing / 2, }}>
            <h3 style={{ margin: Theme.dimSpacing / 2, }}>Theme</h3>
            <div style={{ margin: Theme.dimSpacing / 2, display: 'flex', justifyContent: 'space-between', }}>
                <span
                    className="material-symbols-outlined"
                    style={{ marginTop: '-14px', transform: 'translateY(12px)', marginLeft: Theme.dimSpacing / 2, marginRight: Theme.dimSpacing / 2, cursor: 'pointer', }}
                    onClick={() => {
                        LocalStorage.setDayNightTheme(LocalStorage.getDayNightTheme() === 'light' ? 'dark' : 'light');
                        window.location.reload();
                    }}
                >
                    palette
                </span>
                {
                    LocalStorage.getPrimaryOptions().map(option => <CircleButton
                        style={{ marginLeft: Theme.dimSpacing / 2, marginRight: Theme.dimSpacing / 2, backgroundColor: option, }}
                        onClick={() => {
                            LocalStorage.setPrimary(option);
                            window.location.reload();
                        }}
                    ></CircleButton>)
                }
            </div>
        </Card>
    </Screen>;
}