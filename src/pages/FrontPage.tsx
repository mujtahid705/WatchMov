import React from "react";
import styles from "./FrontPage.module.css";

import { useTheme } from "@mui/material/styles";
import UploadRoundedIcon from "@mui/icons-material/UploadRounded";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import GroupAddRoundedIcon from "@mui/icons-material/GroupAddRounded";
import CelebrationRoundedIcon from "@mui/icons-material/CelebrationRounded";

import frontpageImg from "../images/frontpage_img.jpg";

const FrontPage: React.FC = () => {
  const theme = useTheme();
  return (
    <div>
      <div className={styles.bgSec}>
        <div className={styles.coverImg}>
          <h2 className={styles.title}>
            Watch movies or any videos with your friends!
          </h2>
          <p className={styles.des}>In 4 easy steps...</p>
        </div>
      </div>

      <div className={styles.stepSec}>
        <div className={styles.step}>
          {/* <UploadRoundedIcon
            style={{ color: theme.palette.primary.main, fontSize: "240px" }}
          /> */}
          <UploadRoundedIcon style={{ color: "#262626", fontSize: "70px" }} />
          <p className={styles.stepTitle}>Upload Video</p>
        </div>

        <div className={styles.step}>
          <AddCircleRoundedIcon
            style={{ color: "#262626", fontSize: "70px" }}
          />
          <p className={styles.stepTitle}>Create Room</p>
        </div>

        <div className={styles.step}>
          <GroupAddRoundedIcon style={{ color: "#262626", fontSize: "70px" }} />
          <p className={styles.stepTitle}>Invite Friends</p>
        </div>

        <div className={styles.step}>
          <CelebrationRoundedIcon
            style={{ color: "#262626", fontSize: "70px" }}
          />
          <p className={styles.stepTitle}>Enjoy!</p>
        </div>
      </div>

      <div className={styles.textSecCon}>
        <div className={styles.textSec}>
          <div className={styles.imgCon}>
            <img className={styles.img} src={frontpageImg} />
          </div>

          <div className={styles.textCon}>
            <p className={styles.text}>
              <strong>Enjoy with your friends anytime anywhere!</strong>
            </p>
            <p className={styles.text}>
              Welcome to RoomReel, where movie nights take on a whole new
              dimension! Step beyond the limitations of geographical distance
              and differing schedules. At RoomReel, you're not just a viewer but
              the showrunner. Share cherished movies, riveting documentaries, or
              that side-splitting video from last vacation. Set up a private
              screening room effortlessly and transport the big-screen ambiance
              straight to your home. Planning to host a watch party? It couldn’t
              be simpler! Dispatch an exclusive room link and assemble your
              gang, irrespective of their global coordinates. Delve into lively
              chats, share spontaneous reactions, or just bask in the mutual joy
              of film. "Enjoy with your friends anytime, anywhere!" - RoomReel
              dissolves boundaries and heightens the pleasure of group watching.
              Gather your mates, design your watchlist, and bask in collective
              nostalgia. Your cinematic rendezvous awaits, exclusively at
              RoomReel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
