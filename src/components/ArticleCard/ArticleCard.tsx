import './ArticleCard.css';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Tooltip,
} from '@mui/material';
import { Item } from '../../classes';
import { formatDate, formatLongDescription } from '../../util';

export function ArticleCard({
  pubDate,
  title,
  description,
  link,
  mediaThumbnail,
  creator,
}: Item) {
  const handleNavigation = () => {
    if (link) window.open(link, '_blank');
  };

  return (
    <Card
      className="ArticleCard"
      sx={{
        ':hover': {
          boxShadow: 20,
        },
      }}
      onClick={handleNavigation}
    >
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={mediaThumbnail || 'simpsons.gif'}
        alt="Article image"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
          <Typography variant="h6" color="text.secondary" component="div">
            <Tooltip
              title={description && description.length > 75 ? description : ''}
              enterDelay={1000}
            >
              <div>{description && formatLongDescription(description)}</div>
            </Tooltip>
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {pubDate && formatDate(pubDate)} {creator && ` - ${creator}`}
          </Typography>
          <Typography
            variant="subtitle2"
            color="text.secondary"
            component="div"
          >
            {link}
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}
