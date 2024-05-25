import styles from './Button.module.scss';

export default function Button({ text }) {
    return (
        <button type="submit" className={styles.button}>{text}</button>
    )
}