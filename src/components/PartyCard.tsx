import { useNavigate } from "react-router-dom";
import Theme from "../theme/Theme";
import Card from "./base/Card";
import CircleButton from "./base/CircleButton";

export default function PartyCard(props: any) {
    const navigate = useNavigate();

    return <Card
        style={{...props.style, marginBottom: Theme.dimSpacing}}
    >
        <h3>{props.party.title}</h3>
        <p><span className="material-symbols-outlined">event</span> {props.party.time}</p>
        <p><span className="material-symbols-outlined">pin_drop</span> {props.party.place}</p>
        <p><span className="material-symbols-outlined">live_tv</span> {props.party.game}{props.party.unlimited ? ' + Unlimited' : ''}</p>
        <div style={{ display: 'flex', justifyContent: 'flex-end', }}>
            <CircleButton
                style={{
                    marginTop: Theme.dimSpacing,
                    marginBottom: -(Theme.dimSpacing * 2 - 3),
                }}
                onClick={() => navigate(`/party/${props.party.id}`)}
            >
                Check it out
            </CircleButton>
        </div>
    </Card>
}