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
import Utils from "../Utils";

export default function PartyScreen() {
    const navigate = useNavigate();
    const params = useParams();
    const [party, setParty] = useState(new Party());
    const [game, setGame] = useState(new Game());

    useEffect(() => {
        if (params.id) {
            Firestore.getParty(params.id)
                .then(newParty => {
                    setParty(newParty);
                    Firestore.getGameByName(newParty.game)
                        .then(newGame => setGame(newGame));
                });
        }
    }, [params]);

    if (game.name === '') {
        return <Screen>
            <div style={{ textAlign: 'center', }}>
                <img style={{ margin: 64, width: 128, }} src={loading} alt="" />
            </div>
        </Screen>;
    }

    return <Screen>
        <h1 style={{ margin: 8, textAlign: 'center', }}>
            {party.title}
        </h1>
        <Button
            style={{
                display: 'block',
                width: 'calc(100% - 16px)',
                margin: 8,
            }}
            onClick={() => navigate('/')}
        >
            Vissza
        </Button>
        <Card style={{ margin: 8, }}>
            <h3 style={{ margin: 8, }}>Idő</h3>
            <p style={{ margin: 8, }}>{party.time}</p>
            <h3 style={{ margin: 8, }}>Helyszín</h3>
            <p style={{ margin: 8, }}>{party.place}</p>
            <h3 style={{ margin: 8, }}>Játék</h3>
            <p style={{ margin: 8, }}>{party.game}{party.unlimited ? ' (+Unlimited)' : ''}</p>
            <CircleButton style={{ display: 'block', margin: 8, width: 'calc(100% - 16px)', }}>
                Zene lista megtekintése
            </CircleButton>
            <h3 style={{ margin: 8, }}>Alkalmazás</h3>
            <p style={{ margin: 8, }}>{game.app}</p>
            {
                Utils.getOS() === 'Android' ? <CircleButton>Play Áruház megnyitása</CircleButton> :
                    Utils.getOS() === 'iOS' ? <CircleButton>App Store megnyitása</CircleButton> :
                        <p style={{ margin: 8, }}>Töltsd le telefonra!</p>
            }
        </Card>
    </Screen>;
}