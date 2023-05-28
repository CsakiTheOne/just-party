import { useNavigate, useParams } from "react-router-dom";
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
import Game from "../model/Game";
import Party from "../model/Party";

export default function NewPartyScreen() {
    const navigate = useNavigate();
    const params = useParams();
    const [profile, setProfile] = useState(new Profile());
    const [games, setGames] = useState<Game[]>([]);
    const [isOverride, setIsOverride] = useState(false);
    const [party, setParty] = useState(new Party());

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
            });
        Firestore.getGames()
            .then(newGames => setGames(newGames));
        if (params.id && params.id.length > 2) {
            setIsOverride(true);
            Firestore.getParty(params.id)
                .then(newParty => setParty(newParty));
        }
    }, [navigate, params]);

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
                value={party.title}
                onChange={(e: string) => setParty({ ...party, title: e })}
                style={{
                    margin: Theme.dimSpacing / 2,
                    width: `calc(100% - ${Theme.dimSpacing}px)`,
                }}
            />
            <TextField
                hint='Description'
                value={party.description}
                onChange={(e: string) => setParty({ ...party, description: e })}
                style={{
                    margin: Theme.dimSpacing / 2,
                    width: `calc(100% - ${Theme.dimSpacing}px)`,
                }}
            />
            <TextField
                hint='Time'
                value={party.time}
                onChange={(e: string) => setParty({ ...party, time: e })}
                style={{
                    margin: Theme.dimSpacing / 2,
                    width: `calc(100% - ${Theme.dimSpacing}px)`,
                }}
            />
            <TextField
                hint='Place'
                value={party.place}
                onChange={(e: string) => setParty({ ...party, place: e })}
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
                    padding: Theme.dimSpacing,
                    backgroundColor: Theme.colorBackground,
                    color: Theme.colorOnBackground,
                    border: `2px solid ${Theme.colorPrimary}`,
                    borderRadius: Theme.dimBorderRadius,
                }}

                value={party.game}
                onChange={e => setParty({ ...party, game: e.target.value })}
            >
                <option>Select a game...</option>
                {
                    games.map(game => <option value={game.name}>{game.name}</option>)
                }
            </select>
            {
                games.find(r => r.name === party.game)?.unlimitedAvailable ?
                    <label
                        style={{
                            display: 'block',
                            margin: Theme.dimSpacing / 2,
                            width: `calc(100% - ${Theme.dimSpacing}px)`,
                        }}
                    >
                        <input
                            type="checkbox"
                            checked={party.unlimited}
                            onChange={e => setParty({ ...party, unlimited: e.target.checked })}
                        />
                        <span style={{ marginLeft: Theme.dimSpacing / 2, }}>
                            Unlimited
                        </span>
                    </label> :
                    <>
                        <p
                            style={{
                                display: 'block',
                                margin: Theme.dimSpacing / 2,
                            }}
                        >
                            Unlimited not available for this game.
                        </p>
                        {party.unlimited ? setParty({ ...party, unlimited: false }) : <></>}
                    </>
            }
            <TextField
                hint='Screen (size, OLED?, etc.)'
                list='screens'
                value={party.screen}
                onChange={(e: string) => setParty({ ...party, screen: e })}
                style={{
                    margin: Theme.dimSpacing / 2,
                    width: `calc(100% - ${Theme.dimSpacing}px)`,
                }}
            />
            <datalist id="screens">
                <option value="6.2inch 720p LCD (Nintendo Switch)">Nintendo Switch</option>
                <option value="7inch 720p OLED (Nintendo Switch)">Nintendo Switch OLED</option>
                <option value="5.5inch 720p LCD (Nintendo Switch)">Nintendo Switch Lite</option>
            </datalist>
            <Button
                style={{
                    margin: Theme.dimSpacing / 2,
                    width: `calc(100% - ${Theme.dimSpacing}px)`,
                }}
                onClick={() => {
                    if (isOverride && params.id) {
                        Firestore.updateParty({ ...party, id: params.id })
                            .then(() => navigate(`/party/${params.id}`))
                            .catch(err => alert("Couldn't update party."));
                    }
                    else {
                        Firestore.createParty({ ...party, country: LocalStorage.getCountry()!, organizer: profile.id })
                            .then(id => navigate(`/party/${id}`))
                            .catch(err => alert("Couldn't create party."));
                    }
                }}
            >
                {isOverride ? 'Update' : 'Create'}
            </Button>
        </Card>
    </Screen>;
}