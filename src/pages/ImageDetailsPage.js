import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IconButton, Typography, Card, CardMedia, CardContent, Container } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { fetchImageDetails } from '../services/imageService'; 

const ImageDetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const imageId = location.state?.imageId;

  const [image, setImage] = React.useState(null);

  React.useEffect(() => {
    const loadImageDetails = async () => {
      if (imageId) {
        const result = await fetchImageDetails(imageId);
        setImage(result);
      }
    };

    loadImageDetails();
  }, [imageId]);

  if (!image) {
    return <div>Loading...</div>;
  }

  return (
    <Container style={{ padding: '20px', position: 'relative' }}>
      <IconButton
        onClick={() => navigate('/')}
        style={{ position: 'absolute', top: 20, left: 20 }}
      >
        <ArrowBackIcon />
      </IconButton>
      <Card>
        <CardMedia
          component="img"
          image={image.urls.full}
          alt={image.alt_description}
          style={{ height: '500px', objectFit: 'cover' }}
        />
        <CardContent>
          <Typography variant="headline">
            {image.alt_description || 'No Description'}
          </Typography>
          <Typography variant="body2">
            {image.description || 'No additional details available.'}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ImageDetailsPage;
