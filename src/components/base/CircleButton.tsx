import Theme from "../../theme/Theme";

export default function CircleButton(props: any) {
    return <button
        onClick={props.onClick}
        style={{
            border: 'none',
            padding: Theme.dimPaddingMin,
            backgroundColor: Theme.colorPrimary,
            color: Theme.colorOnPrimary,
            borderRadius: Theme.dimPaddingMin * 2,
            cursor: 'pointer',
            ...props.style,
        }}
    >
        {props.children}
    </button>;
}
