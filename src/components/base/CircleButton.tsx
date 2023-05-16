import Theme from "../../theme/Theme";

export default function CircleButton(props: any) {
    return <button
        onClick={props.onClick}
        style={{
            border: 'none',
            padding: Theme.dimPaddingMin * .5,
            backgroundColor: Theme.colorPrimary,
            color: Theme.colorOnPrimary,
            borderRadius: (Theme.dimPaddingMin * .5) * 2,
            cursor: 'pointer',
            ...props.style,
        }}
    >
        {props.children}
    </button>;
}
