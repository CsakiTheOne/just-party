import Theme from "../../theme/Theme";

export default function Card(props: any) {
    return <div
        style={{
            padding: Theme.dimSpacing,
            backgroundColor: Theme.colorSurface,
            color: Theme.colorOnSurface,
            border: `3px solid ${Theme.colorPrimary}`,
            borderRadius: Theme.dimBorderRadius,
            ...props.style,
        }}
    >
        {props.children}
    </div>;
}