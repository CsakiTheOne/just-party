import { useNavigate, useParams } from "react-router-dom";
import Card from "../components/base/Card";
import Screen from "../components/base/Screen";
import Button from "../components/base/Button";
import { useEffect, useState } from "react";
import Party from "../model/Party";
import Firestore from "../firebase/Firestore";
import Game from "../model/Game";
import CircleButton from "../components/base/CircleButton";
import loading from '../media/loading.gif';
import JDApp from "../model/JDApp";
import Theme from "../theme/Theme";
import Profile from "../model/Profile";
import Auth from "../firebase/Auth";

export default function PartyScreen() {
    const navigate = useNavigate();
    const params = useParams();
    const [party, setParty] = useState(new Party());
    const [organizer, setOrganizer] = useState(new Profile());
    const [game, setGame] = useState(new Game());
    const [app, setApp] = useState(new JDApp());

    useEffect(() => {
        if (params.id) {
            Firestore.getParty(params.id)
                .then(newParty => {
                    setParty(newParty);
                    if (newParty.organizer) {
                        Firestore.getProfile(newParty.organizer)
                            .then(newOrganizer => setOrganizer(newOrganizer));
                    }
                    if (newParty.game) {
                        Firestore.getGameByName(newParty.game)
                            .then(newGame => {
                                setGame(newGame)
                                Firestore.getAppByName(newGame.app)
                                    .then(newApp => setApp(newApp));
                            });
                    }
                });
        }
    }, [params]);

    if (app && organizer && (app.name === '' || organizer.displayName === '')) {
        return <Screen>
            <div style={{ textAlign: 'center', }}>
                <img style={{ margin: 64, width: 128, }} src={loading} alt="" />
            </div>
        </Screen>;
    }

    if (!party.title || !party.organizer) {
        return <Screen>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
                <div>
                    <h1 style={{ margin: Theme.dimSpacing / 2, }}>
                        Party does not exist
                    </h1>
                    <p style={{ margin: Theme.dimSpacing / 2, }}>
                        This party is over :(
                    </p>
                </div>
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
        </Screen>;
    }

    return <Screen>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
            <div>
                <h1 style={{ margin: Theme.dimSpacing / 2, }}>
                    {party.title}
                </h1>
                <p style={{ margin: Theme.dimSpacing / 2, }}>
                    by {organizer.displayName}
                </p>
            </div>
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
            <p style={{ marginBottom: Theme.dimSpacing, }}>
                {party.description}
            </p>
            <p style={{ marginBottom: Theme.dimSpacing, }}>
                <span className="material-symbols-outlined">event</span> {party.time}
            </p>
            <p style={{ marginBottom: Theme.dimSpacing, }}>
                <span className="material-symbols-outlined">pin_drop</span> {party.place}
            </p>
            <p style={{ marginBottom: Theme.dimSpacing, }}>
                <span className="material-symbols-outlined">live_tv</span> {party.game}{party.unlimited ? ' + Unlimited' : ''}
            </p>
            <CircleButton
                style={{ display: 'block', marginBottom: Theme.dimSpacing, width: '100%', }}
                onClick={() => alert('Not available yet!')}
            >
                Check song list
            </CircleButton>
            <p style={{ marginBottom: Theme.dimSpacing, }}>
                <span className="material-symbols-outlined">install_mobile</span> {game.app}<br />
                (You have to download this if you want to be scored.)
            </p>
            <CircleButton
                style={{ display: 'block', marginBottom: Theme.dimSpacing, width: '100%', }}
                onClick={() => window.open(app.downloadAndroid, '_blank')}
            >
                Open Google Play Store
            </CircleButton>
            <CircleButton
                style={{ display: 'block', width: '100%', }}
                onClick={() => window.open(app.downloadIOS, '_blank')}
            >
                Open App Store
            </CircleButton>
        </Card>
        {
            organizer.id === Auth.auth.currentUser?.uid ? <>
                <Button
                    style={{
                        display: 'block',
                        width: `calc(100% - ${Theme.dimSpacing}px)`,
                        margin: Theme.dimSpacing / 2,
                        backgroundColor: Theme.colorError,
                        color: Theme.colorOnError,
                    }}
                    onClick={() => {
                        navigate(`/party/new/${params.id}`);
                    }}
                >
                    Edit party
                </Button>
                <Button
                    style={{
                        display: 'block',
                        width: `calc(100% - ${Theme.dimSpacing}px)`,
                        margin: Theme.dimSpacing / 2,
                        backgroundColor: Theme.colorError,
                        color: Theme.colorOnError,
                    }}
                    onClick={() => {
                        const ans = prompt("Type in the party's title to delete it!");
                        if (ans === party.title) {
                            Firestore.removeParty(party.id)
                                .then(() => {
                                    alert('Party removed!');
                                    navigate('/');
                                })
                                .catch(err => alert('Party not removed, try again!'));
                        }
                        else {
                            alert('Party not removed, try again!');
                        }
                    }}
                >
                    Delete party
                </Button>

            </> : <></>
        }
    </Screen>;
}