import * as React from "react";

function Delayed({ children, wait = 100 }) {
    const [show, setShow] = React.useState(false);

    React.useEffect(() => {
        const timer = window.setTimeout(() => {
            setShow(true);
        }, wait);
        return () => {
            window.clearTimeout(timer);
        };
    }, [wait]);
    return show === true ? children : null;
}

export default function Loading() {
    return (
        <Delayed>
            <div className="loading center text-center" />
        </Delayed>
    );
}
