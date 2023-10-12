import styles from "./UploadPage.module.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useRef } from "react";

const UploadPage: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const addVidHandler = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };
  return (
    <div className={styles.container}>
      <h1>Upload Video</h1>

      <div>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="filled-basic"
            label="Title"
            variant="filled"
            color="primary"
            InputLabelProps={{
              className: `${styles.text}`,
            }}
            inputProps={{
              className: `${styles.text}`,
            }}
          />
        </Box>
      </div>

      <input ref={inputRef} type="file" accept="video/*" hidden />

      <div className={styles.addVidBtn} onClick={addVidHandler}>
        <p>Add Video</p>
      </div>
    </div>
  );
};

export default UploadPage;
