import { useNavigate, useSearchParams } from "react-router-dom";
import Screen from "../components/base/Screen";
import Button from "../components/base/Button";
import songs from "../static/songs.json";
import Theme from "../theme/Theme";

export default function SongsScreen() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    return <Screen>
        <h1 style={{ margin: 8, textAlign: 'center', }}>Zene lista</h1>
        <Button
            style={{
                display: 'block',
                width: 'calc(100% - 16px)',
                margin: 8,
            }}
            onClick={() => navigate(-1)}
        >
            Vissza
        </Button>
        <h3 style={{ margin: 8 }}>{searchParams.get('game')}</h3>
        <ul
            style={{
                margin: 8,
                backgroundColor: Theme.colorSurface,
                borderRadius: Theme.dimBorderRadius,
                overflow: 'hidden',
            }}
        >
            {
                songs[searchParams.get('game') as string] ?
                    songs[searchParams.get('game') as string].map((song: { title: string, artist: string }) => <li
                        style={{
                            padding: Theme.dimPaddingMin / 2,
                            listStyle: 'none',
                            borderBottom: `1px solid ${Theme.colorBackground}`,
                        }}
                    >
                        {song.title} - {song.artist}
                    </li>) :
                    <li style={{ padding: Theme.dimPaddingMin / 2, listStyle: 'none', }}>Ehhez még nem sikerült összeraknom a zene listát.</li>
            }
        </ul>
        {
            searchParams.get('unlimited') ? <>
                <h3 style={{ margin: 8 }}>Unlimited</h3>
                <Button
                    style={{
                        display: 'block',
                        width: 'calc(100% - 16px)',
                        margin: 8,
                    }}
                    onClick={() => window.open('https://justdance.fandom.com/wiki/Just_Dance_Unlimited#Track_List', '_blank')}
                >
                    Just Dance wiki megnyitása
                </Button>
            </> : <></>
        }
    </Screen>;
}