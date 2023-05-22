import { useNavigate, useSearchParams } from "react-router-dom";
import Screen from "../components/base/Screen";
import Button from "../components/base/Button";
import songs from "../static/songs.json";
import Theme from "../theme/Theme";

export default function SongsScreen() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    return <Screen>
        <h1 style={{ margin: Theme.dimSpacing / 2, textAlign: 'center', }}>Song list</h1>
        <Button
            style={{
                display: 'block',
                width: 'calc(100% - 16px)',
                margin: Theme.dimSpacing / 2,
            }}
            onClick={() => navigate(-1)}
        >
            Go back
        </Button>
        <h3 style={{ margin: Theme.dimSpacing / 2 }}>{searchParams.get('game')}</h3>
        <ul
            style={{
                margin: Theme.dimSpacing / 2,
                backgroundColor: Theme.colorSurface,
                borderRadius: Theme.dimBorderRadius,
                overflow: 'hidden',
            }}
        >
            {
                songs[searchParams.get('game') as string] ?
                    songs[searchParams.get('game') as string].map((song: { title: string, artist: string }) => <li
                        style={{
                            padding: Theme.dimSpacing / 2,
                            listStyle: 'none',
                            borderBottom: `1px solid ${Theme.colorBackground}`,
                        }}
                    >
                        {song.title} - {song.artist}
                    </li>) :
                    <li style={{ padding: Theme.dimSpacing / 2, listStyle: 'none', }}>404</li>
            }
        </ul>
        {
            searchParams.get('unlimited') ? <>
                <h3 style={{ margin: 8 }}>Unlimited</h3>
                <Button
                    style={{
                        display: 'block',
                        width: 'calc(100% - 16px)',
                        margin: Theme.dimSpacing / 2,
                    }}
                    onClick={() => window.open('https://justdance.fandom.com/wiki/Just_Dance_Unlimited#Track_List', '_blank')}
                >
                    Open Just Dance Wiki
                </Button>
            </> : <></>
        }
    </Screen>;
}