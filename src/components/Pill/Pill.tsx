import styles from "./Pill.module.css"

export default function Pill({text}: {text: string}) {
  return (
    <div className={styles["pill"]}>
      {text}
    </div>
  )
}
