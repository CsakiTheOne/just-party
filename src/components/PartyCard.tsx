import { useNavigate } from "react-router-dom";
import Theme from "../theme/Theme";
import Card from "./base/Card";
import CircleButton from "./base/CircleButton";

export default function PartyCard(props: any) {
    const navigate = useNavigate();

    return <Card
        style={props.style}
    >
        <h3>{props.party.title}</h3>
        <p>Idő: {props.party.time}</p>
        <p>Helyszín: {props.party.place}</p>
        <p>Játék: {props.party.game}{props.party.unlimited ? ' (+Unlimited)' : ''}</p>
        <div style={{ display: 'flex', justifyContent: 'flex-end', }}>
            <CircleButton
                style={{
                    marginTop: Theme.dimPaddingMin,
                    marginBottom: -(Theme.dimPaddingMin * 2 + 3),
                }}
                onClick={() => navigate(`/party/${props.party.id}`)}
            >
                Megnézem
            </CircleButton>
        </div>
    </Card>
}