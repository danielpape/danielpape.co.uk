import styles from "./LinkCard.module.css";
import dateFormat from "dateformat";

export default function LinkCard({ link }) {

    function removeHttp(url) {
        return url.replace(/^https?:\/\//, '');
      }

  return (
    <div className={styles.linkCard}>
      <p className={styles.linkCard_date}>{dateFormat(link.date, "ddd dd mmm yyyy")}</p>
      <h2 className={styles.linkCard_title}>{link.pageName}</h2>
      <p className={styles.linkCard_text}>{link.plaintextdescription}</p>
      <p className={styles.linkCard_source}>
        via{" "}
        <a href={link.link} target="_blank">
          {removeHttp(link.link)}
        </a>
      </p>
    </div>
  );
}
