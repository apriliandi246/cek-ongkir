import React, { useState } from "react";
import provinces from "../data/province";
import cities from "../data/cities";
import styles from "../css/Form.module.css";

export default function Form() {
	const [fromCity, setFromCity] = useState("");
	const [fromProvince, setFromProvince] = useState("");

	const [toCity, setToCity] = useState("");
	const [toProvince, setToProvince] = useState("");

	return (
		<React.Fragment>
			<form spellCheck="false" autoComplete="off" className={styles.form}>
				<div style={{ position: "relative" }} className={styles.input_form}>
					<label htmlFor="from-province" className={styles.input_form__label}>
						Dari provinsi
					</label>

					<select
						id="from-province"
						className={styles.input_form__input}
						style={{ appearance: "none", paddingRight: "60px" }}
						onChange={(event) => setFromProvince(parseInt(event.target.value))}
					>
						<option hidden>Pilih provinsi</option>

						{provinces.map((province) => (
							<option key={province.province_id} value={province.province_id}>
								{province.province}
							</option>
						))}
					</select>

					<svg
						width="34px"
						height="34px"
						viewBox="0 0 20 20"
						fill="currentColor"
						className={styles.select_icon}
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
							clipRule="evenodd"
						/>
					</svg>
				</div>

				<div style={{ position: "relative" }} className={styles.input_form}>
					<label htmlFor="from-city" className={styles.input_form__label}>
						Dari kota/kabupaten
					</label>

					<select
						id="from-city"
						className={styles.input_form__input}
						disabled={fromProvince === "" ? true : false}
						style={{ appearance: "none", paddingRight: "60px" }}
						onChange={(event) => setFromCity(parseInt(event.target.value))}
					>
						<option hidden>Pilih kota/kabupaten</option>

						{fromProvince === ""
							? ""
							: cities[fromProvince - 1].map((city) => (
									<option key={city.city_id} value={city.city_id}>
										{city.city_name}
									</option>
							  ))}
					</select>

					<svg
						width="34px"
						height="34px"
						viewBox="0 0 20 20"
						className={styles.select_icon}
						xmlns="http://www.w3.org/2000/svg"
						fill={fromProvince === "" ? "#9a9a9a" : "currentColor"}
					>
						<path
							fillRule="evenodd"
							d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
							clipRule="evenodd"
						/>
					</svg>
				</div>

				<p className={styles.break}>. . .</p>

				<div style={{ position: "relative" }} className={styles.input_form}>
					<label htmlFor="to-province" className={styles.input_form__label}>
						Ke provinsi mana
					</label>

					<select
						id="to-province"
						className={styles.input_form__input}
						style={{ appearance: "none", paddingRight: "60px" }}
						onChange={(event) => setToProvince(parseInt(event.target.value))}
					>
						<option hidden>Pilih provinsi</option>

						{provinces.map((province) => (
							<option key={province.province_id} value={province.province_id}>
								{province.province}
							</option>
						))}
					</select>

					<svg
						width="34px"
						height="34px"
						viewBox="0 0 20 20"
						fill="currentColor"
						className={styles.select_icon}
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fillRule="evenodd"
							d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
							clipRule="evenodd"
						/>
					</svg>
				</div>

				<div style={{ position: "relative" }} className={styles.input_form}>
					<label htmlFor="to-city" className={styles.input_form__label}>
						Ke kota/kabupaten mana
					</label>

					<select
						id="to-city"
						className={styles.input_form__input}
						disabled={toProvince === "" ? true : false}
						style={{ appearance: "none", paddingRight: "60px" }}
						onChange={(event) => setToCity(parseInt(event.target.value))}
					>
						<option hidden>Pilih kota/kabupaten</option>

						{toProvince === ""
							? ""
							: cities[fromProvince - 1].map((city) => (
									<option key={city.city_id} value={city.city_id}>
										{city.city_name}
									</option>
							  ))}
					</select>

					<svg
						width="34px"
						height="34px"
						viewBox="0 0 20 20"
						className={styles.select_icon}
						xmlns="http://www.w3.org/2000/svg"
						fill={toProvince === "" ? "#9a9a9a" : "currentColor"}
					>
						<path
							fillRule="evenodd"
							d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
							clipRule="evenodd"
						/>
					</svg>
				</div>

				<p className={styles.break}>. . .</p>

				<div className={styles.input_form}>
					<label htmlFor="weight" className={styles.input_form__label}>
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
					<label htmlFor="expedition" className={styles.input_form__label}>
						Pilih Ekspedisi
					</label>

					<select
						id="expedition"
						className={styles.input_form__input}
						style={{ appearance: "none", paddingRight: "60px" }}
					>
						<option hidden>Pilih kota/kabupaten</option>
						<option value="pos">POS</option>
						<option value="jne">JNE</option>
						<option value="tiki">TIKI</option>
					</select>

					<svg
						width="34px"
						height="34px"
						fill="currentColor"
						viewBox="0 0 20 20"
						className={styles.select_icon}
						xmlns="http://www.w3.org/2000/svg"
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
		</React.Fragment>
	);
}
