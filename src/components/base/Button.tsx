import Theme from "../../theme/Theme";

export default function Button(props: any) {
    return <button
        onClick={props.onClick}
        style={{
            border: 'none',
            padding: Theme.dimSpacing,
            backgroundColor: Theme.colorPrimary,
            color: Theme.colorOnPrimary,
            borderRadius: Theme.dimBorderRadius,
            cursor: 'pointer',
            ...props.style,
        }}
    >
        {props.children}
    </button>;
}
