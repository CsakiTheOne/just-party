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
        <p>Idő: 2023. Június</p>
        <p>Helyszín: Várpalota</p>
        <p>Játék: Just Dance 2022 (+Unlimited)</p>
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