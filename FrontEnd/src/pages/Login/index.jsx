import "./styles.scss";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Home() {
  return (
    <div className="Home">
      <div className="navbar container">
        <div>
          <h1 className="logo">MyFavoriteMovie</h1>
        </div>
      </div>
      <div className="presentation">
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          
        </Box>
      </div>
    </div>
  );
}
