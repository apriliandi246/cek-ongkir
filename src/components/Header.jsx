import styles from "../css/Header.module.css";

export default function Header() {
	return (
		<div className={styles.header}>
			<h1 className={styles.header__title}>Cek Ongkir</h1>
			<p className={styles.header__desc}>POS - JNE - TIKI</p>
		</div>
	);
}
