import { Link } from "react-router-dom";
import VideoCard from "../components/UI/VideoCard";
import styles from "./HomePage.module.css";

import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Hello Mujtahid!</h1>
      <div className={styles.contentBox}>
        <Link className={styles.uVidCon} to="/upload">
          <div className={styles.uVidCon}>
            <AddCircleRoundedIcon
              style={{ color: "#5b5a5a", fontSize: "70px" }}
            />
            <p>Upload Video</p>
          </div>
        </Link>

        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
};

export default HomePage;
