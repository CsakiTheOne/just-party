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

export default function PartyScreen() {
    const navigate = useNavigate();
    const params = useParams();
    const [party, setParty] = useState(new Party());
    const [game, setGame] = useState(new Game());
    const [app, setApp] = useState(new JDApp());

    useEffect(() => {
        if (params.id) {
            Firestore.getParty(params.id)
                .then(newParty => {
                    setParty(newParty);
                    Firestore.getGameByName(newParty.game)
                        .then(newGame => {
                            setGame(newGame)
                            Firestore.getAppByName(newGame.app)
                                .then(newApp => setApp(newApp));
                        });
                });
        }
    }, [params]);

    if (app.name === '') {
        return <Screen>
            <div style={{ textAlign: 'center', }}>
                <img style={{ margin: 64, width: 128, }} src={loading} alt="" />
            </div>
        </Screen>;
    }

    return <Screen>
        <h1 style={{ margin: Theme.dimSpacing / 2, textAlign: 'center', }}>
            {party.title}
        </h1>
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
            <h3><span className="material-symbols-outlined">event</span> Time</h3>
            <p style={{ marginBottom: Theme.dimSpacing, }}>{party.time}</p>
            <h3><span className="material-symbols-outlined">pin_drop</span> Place</h3>
            <p style={{ marginBottom: Theme.dimSpacing, }}>{party.place}</p>
            <h3><span className="material-symbols-outlined">live_tv</span> Game</h3>
            <p style={{ marginBottom: Theme.dimSpacing, }}>{party.game}{party.unlimited ? ' + Unlimited' : ''}</p>
            <CircleButton
                style={{ display: 'block', marginBottom: Theme.dimSpacing, width: '100%', }}
                onClick={() => navigate(`/songs?game=${game.name}&unlimited=${party.unlimited}`)}
            >
                Check song list
            </CircleButton>
            <h3><span className="material-symbols-outlined">install_mobile</span> App</h3>
            <p style={{ marginBottom: Theme.dimSpacing, }}>You have to download this if you want to be scored:<br />{game.app}</p>
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
    </Screen>;
}