import React from "react";
import styles from "./Message.module.css";




export default function Message({ type, msg }) {  // Ao invez de props posso passar tanbem um objeto com parâmetros
// export default function Message(props) {

    const [visible, setVisible] = React.useState(false);

    React.useEffect(() => {
        if (!msg) {
            setVisible(false);
            return;
        }
        setVisible(true);

        const timer = setTimeout(() => { setVisible(false) },
            3000);

        return () => clearTimeout(timer); // esta linha comentada não mudou o comportamento - ver melhor posteriormente

    }, [msg])

    return (

        <> {visible &&
            (<div className={`${styles.message} ${styles[type]}`}> {msg}</div>)
        }
        </>

    );

}