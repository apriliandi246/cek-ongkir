import styles from "../css/Form.module.css";

export default function Form() {
	return (
		<form spellcheck="false" autocomplete="off" className={styles.form}>
			<div className={styles.input_form}>
				<label for="origin" className={styles.input_form__label}>
					Dari mana
				</label>

				<input
					required
					id="origin"
					type="text"
					className={styles.input_form__input}
					placeholder="dari kota atau kabupaten mana"
				/>
			</div>

			<div className={styles.input_form}>
				<label for="destination" className={styles.input_form__label}>
					Kemana
				</label>

				<input
					required
					type="text"
					id="destination"
					className={styles.input_form__input}
					placeholder="ke kota atau kabupaten mana"
				/>
			</div>

			<div className={styles.input_form}>
				<label for="weight" className={styles.input_form__label}>
					Berat barang (gram)
				</label>

				<input
					min="1"
					required
					id="weight"
					type="number"
					placeholder="berat barang"
					className={styles.input_form__input}
				/>
			</div>

			<div style={{ position: "relative" }} className={styles.input_form}>
				<label for="expedition" className={styles.input_form__label}>
					Pilih Ekspedisi
				</label>

				<select
					id="expedition"
					style={{ appearance: "none", paddingRight: "60px" }}
					className={styles.input_form__input}
				>
					<option hidden>Pilih ekspedisi</option>
					<option value="pos">POS</option>
					<option value="jne">JNE</option>
					<option value="tiki">TIKI</option>
				</select>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					className={styles.select_icon}
					viewBox="0 0 20 20"
					fill="currentColor"
					width="34px"
					height="34px"
				>
					<path
						fillRule="evenodd"
						d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
						clipRule="evenodd"
					/>
				</svg>
			</div>

			<button type="submit" className={styles.button_form}>
				Tampilkan hasil
			</button>
		</form>
	);
}
