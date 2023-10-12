import styles from "./VideoCard.module.css";
import thumbnail from "../../images/thumbnail.jpg";

const VideoCard: React.FC = () => {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={thumbnail} />
      <p className={styles.title}>This is a video!</p>
    </div>
  );
};

export default VideoCard;
