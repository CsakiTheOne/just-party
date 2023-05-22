import Theme from "../../theme/Theme";

export default function TextField(props: any) {
    return <input
        style={{
            padding: Theme.dimSpacing,
            backgroundColor: Theme.colorSurface,
            color: Theme.colorOnSurface,
            border: `2px solid ${Theme.colorPrimary}`,
            borderRadius: Theme.dimBorderRadius,
            ...props.style,
        }}
        value={props.value}
        onChange={e => props.onChange(e.target.value)}
        placeholder={props.hint}
    />;
}
