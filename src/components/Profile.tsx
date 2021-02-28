import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/gibdike.png" alt="Vitória Angel" />
      <div>
        <strong>Vitória Angel</strong>
        <p>
          <img src="icons/level.svg" alt="seta" />
          Level 1
        </p>
      </div>
    </div>
  );
}
