export default function Screen(props: any) {
    return <div style={{ margin: 'auto', maxWidth: 640 }}>
        {props.children}
    </div>;
}