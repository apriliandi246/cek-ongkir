import styles from "../css/Result.module.css";

export default function Result() {
	return (
		<div className={styles.result}>
			<div className={styles.courier}>
				<h1 className={styles.courier__name}>JNE</h1>
				<p className={styles.courier__stand_for}>Jalur Nugraha Ekakurir</p>
			</div>

			<div className={styles.service}>
				<h1 className={styles.service__name}>OKE</h1>
				<p className={styles.service__detail}>Ongkos Kirim Ekonomis</p>
			</div>

			<div className={styles.place}>
				<div className={styles.origin}>
					<p className={styles.origin__label}>Dari :</p>
					<p className={styles.origin__place}>Subulussalam</p>
				</div>

				<div className={styles.origin}>
					<p className={styles.origin__label}>ke :</p>
					<p className={styles.origin__place}>Jakarta Barat</p>
				</div>

				<div className={styles.origin}>
					<p className={styles.origin__label}>Berat barang :</p>
					<p className={styles.origin__place}>200 gram</p>
				</div>
			</div>

			<h1 className={styles.price}>Rp 49.000</h1>
		</div>
	);
}
