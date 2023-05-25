import { useNavigate } from "react-router-dom";
import Theme from "../theme/Theme";

export default function TopBar() {
    const navigate = useNavigate();
    
    return <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
        <h1 style={{ margin: Theme.dimSpacing / 2, }}>
            Just Party
        </h1>
        <span
            className="material-symbols-outlined"
            style={{ marginRight: Theme.dimSpacing, cursor: 'pointer', }}
            onClick={() => navigate('/settings')}
        >
            settings
        </span>
    </div>;
}