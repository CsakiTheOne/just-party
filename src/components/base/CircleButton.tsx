import Theme from "../../theme/Theme";

export default function CircleButton(props: any) {
    return <button
        onClick={props.onClick}
        style={{
            display: 'block',
            border: 'none',
            padding: Theme.dimSpacing * .5,
            backgroundColor: Theme.colorPrimary,
            color: Theme.colorOnPrimary,
            borderRadius: (Theme.dimSpacing * .5) * 2,
            cursor: 'pointer',
            ...props.style,
        }}
    >
        {props.children}
    </button>;
}
