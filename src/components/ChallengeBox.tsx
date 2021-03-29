import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    const hasActiveChallenge = true;

    return (
        <div className={styles.challengeBoxContainer}>
            { hasActiveChallenge ? (
                <div className={styles.challengeActive}>
                    <header> Win 400 XP</header>

                    <main>
                        <img src="icons/body.svg" />
                        <strong>New Challenge</strong>
                        <p>Wake Up and run for 3 mins</p>
                    </main>

                    <footer>
                        <button
                            type="button"
                            className={styles.challengeFailedButton}
                        >
                            Fail
                        </button>
                        <button
                            type="button"
                            className={styles.challengeSucceededButton}
                        >
                            Win
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                    <strong>End a cycle to receive a challange</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="Level Up" />
                    complete the challanges to level up.
                </p>
                </div>
            )}
        </div >
    )
}