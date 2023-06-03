import { useNavigate } from "react-router-dom";
import Button from "../components/base/Button";
import Card from "../components/base/Card";
import CircleButton from "../components/base/CircleButton";
import Screen from "../components/base/Screen";
import { useEffect, useState } from "react";
import Theme from "../theme/Theme";
import { CountryDropdown } from "react-country-region-selector";
import LocalStorage from "../data/Local";
import Auth from "../firebase/Auth";
import TextField from "../components/base/TextField";
import Profile from "../model/Profile";
import Firestore from "../firebase/Firestore";
import CountryField from "../components/base/CountryField";

export default function SongsScreen() {
    const navigate = useNavigate();

    return <Screen>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', }}>
            <h1 style={{ margin: Theme.dimSpacing / 2, }}>
                Just Party
            </h1>
        </div>
        <Button
            style={{
                display: 'block',
                width: `calc(100% - ${Theme.dimSpacing}px)`,
                margin: Theme.dimSpacing / 2,
            }}
            onClick={() => navigate(-1)}
        >
            Go back
        </Button>
        <h3 style={{ margin: Theme.dimSpacing / 2, }}>Subscriptions</h3>
        <a
            href="https://justdance.fandom.com/wiki/Just_Dance_Unlimited#Track_List"
            target="_blank"
            rel="noreferrer"
        >
            <CircleButton
                style={{
                    display: 'block',
                    width: `calc(100% - ${Theme.dimSpacing}px)`,
                    margin: Theme.dimSpacing / 2,
                }}
            >
                Just Dance Unlimited track list
            </CircleButton>
        </a>
        <a
            href="https://justdance.fandom.com/wiki/Just_Dance%2B#Track_List"
            target="_blank"
            rel="noreferrer"
        >
            <CircleButton
                style={{
                    display: 'block',
                    width: `calc(100% - ${Theme.dimSpacing}px)`,
                    margin: Theme.dimSpacing / 2,
                }}
            >
                Just Dance+ track list
            </CircleButton>
        </a>
        <h3 style={{ margin: Theme.dimSpacing / 2, }}>Games</h3>
        <a
            href="https://justdance.fandom.com/wiki/Just_Dance_Now#Track_List"
            target="_blank"
            rel="noreferrer"
        >
            <CircleButton
                style={{
                    display: 'block',
                    width: `calc(100% - ${Theme.dimSpacing}px)`,
                    margin: Theme.dimSpacing / 2,
                }}
            >
                Just Dance Now track list
            </CircleButton>
        </a>
        <a
            href="https://justdance.fandom.com/wiki/Just_Dance_2023_Edition#Track_List"
            target="_blank"
            rel="noreferrer"
        >
            <CircleButton
                style={{
                    display: 'block',
                    width: `calc(100% - ${Theme.dimSpacing}px)`,
                    margin: Theme.dimSpacing / 2,
                }}
            >
                Just Dance 2023 Edition track list
            </CircleButton>
        </a>
        <a
            href="https://justdance.fandom.com/wiki/Just_Dance_2022#Track_List"
            target="_blank"
            rel="noreferrer"
        >
            <CircleButton
                style={{
                    display: 'block',
                    width: `calc(100% - ${Theme.dimSpacing}px)`,
                    margin: Theme.dimSpacing / 2,
                }}
            >
                Just Dance 2022 track list
            </CircleButton>
        </a>
    </Screen>;
}