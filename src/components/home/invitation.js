import { 
  Stack,
  Typography,
  Button
} from '@mui/material';
import { Link } from 'react-router-dom';

function Invitation() {
  const invitationParagraph = "Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don&apos;t simply skip over it entirely.";
  return (
    <>
      <Typography 
        variant="h6" 
        align="center" 
        color="text.secondary" 
        paragraph
        gutterBottom
      >
        {invitationParagraph}
      </Typography>
      <Stack
        sx={{ pt: 4 }}
        direction="row"
        spacing={2}
        justifyContent="center"
      >
        <Link to={{pathname: "/login"}} underline="none">
          <Button  variant="outlined">Login</Button>
        </Link>
      </Stack>
    </>
  );
}

export default Invitation;
