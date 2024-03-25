import styles from "../page.module.css";


export default function Project1() {
    return <main className={styles.main}>

        <h1>Project1</h1>

        <div style={{maxWidth:'65rem' }}>
            <iframe src="p1.html" width="100%" height="1500px" style={{border: "none"}}/>

        </div>


    </main>
}

