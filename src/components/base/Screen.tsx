export default function Screen(props: any) {
    return <div style={{ margin: 'auto', maxWidth: 500, paddingBottom: 128 }}>
        {props.children}
    </div>;
}