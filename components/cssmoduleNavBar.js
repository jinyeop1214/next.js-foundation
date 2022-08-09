import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./cssmoduleNavBar.module.css";

export default function NavBar() {
	const router = useRouter();

	return (
		<nav>
			{/* <nav className={styles.nav}> */}
			{/* <a href="/">Home</a>
			<a href="/about">About</a> */}
			<Link href="/">
				{/* <a style={{ color: router.pathname === "/" ? "red" : "blue" }}> */}
				<a
					className={`${styles.link} ${
						router.pathname === "/" ? styles.active : ""
					}`}
				>
					Home
				</a>
			</Link>
			<Link href="/about">
				<a
					className={[
						styles.link,
						router.pathname === "/about" ? styles.active : "",
					].join(" ")}
				>
					About
				</a>
			</Link>
		</nav>
	);
}
