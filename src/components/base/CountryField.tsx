import { CountryDropdown } from "react-country-region-selector";
import LocalStorage from "../../data/Local";
import { createUseStyles } from "react-jss";
import Theme from "../../theme/Theme";

export default function CountryField(props: any) {
    const classes = createUseStyles({
        CountryField: {
            display: 'block',
            padding: Theme.dimSpacing,
            backgroundColor: Theme.colorBackground,
            color: Theme.colorOnBackground,
            border: `2px solid ${Theme.colorPrimary}`,
            borderRadius: Theme.dimBorderRadius,
            ...props.style,
        }
    })();

    return <CountryDropdown
        classes={classes.CountryField}
        value={props.value}
        onChange={e => {
            LocalStorage.setCountry(e);
            props?.onChange(e);
        }}
    />;
}
