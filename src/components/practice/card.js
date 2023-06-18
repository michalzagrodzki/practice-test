import { 
  Card as MuiCard, 
  CardContent,
  Typography,
} from '@mui/material';

function Card({title, body}) {
  return (
    <MuiCard
      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography>
          {body}
        </Typography>
      </CardContent>
    </MuiCard>
  );
}

export default Card;
