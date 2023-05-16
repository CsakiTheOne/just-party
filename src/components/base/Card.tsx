import Theme from "../../theme/Theme";

export default function Card(props: any) {
    return <div
        style={{
            padding: Theme.dimPaddingMin,
            backgroundColor: Theme.colorBackground,
            border: `3px solid ${Theme.colorPrimary}`,
            borderRadius: Theme.dimBorderRadius,
            ...props.style,
        }}
    >
        {props.children}
    </div>;
}