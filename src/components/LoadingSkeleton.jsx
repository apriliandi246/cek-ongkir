import styles from "../css/LoadingSkeleton.module.css";

export default function LoadingSkeleton() {
	return (
		<div className={styles.card}>
			<div style={{ height: "48px" }} className={styles.card__block}></div>

			<div
				style={{ height: "48px", marginTop: "20px" }}
				className={styles.card__block}
			></div>

			<div
				style={{ height: "48px", marginTop: "20px" }}
				className={styles.card__block}
			></div>

			<div
				style={{ height: "48px", marginTop: "20px" }}
				className={styles.card__block}
			></div>
		</div>
	);
}
