import { useNavigate, useParams } from "react-router-dom";
import Card from "../components/base/Card";
import Screen from "../components/base/Screen";
import Button from "../components/base/Button";

export default function PartyScreen() {
    const navigate = useNavigate();
    const params = useParams();

    return <Screen>
        <h1 style={{ margin: 8, textAlign: 'center', }}>
            Party címe
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
        {`${params}`}
    </Screen>;
}