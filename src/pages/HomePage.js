import React, { useState, useEffect } from 'react';
import { TextField, Grid, Typography, Pagination, Card, CardMedia, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { fetchImages } from '../services/imageService';
import { useImageContext } from './ImageProvider';

const HomePage = () => {
  const { images, setImages, totalPages, setTotalPages,query,setQuery,page,setPage } = useImageContext();
  const navigate = useNavigate();

  useEffect(() => {
    const loadImages = async () => {
      if (query) {
        const result = await fetchImages(query, page);
        setImages(result.images);
        setTotalPages(result.totalPages);
      }
    };

    loadImages();
  }, [page, setImages, setTotalPages]);

  const handleSearch = async () => {
    const result = await fetchImages(query, page);
    setImages(result.images);
    setTotalPages(result.totalPages);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
        setPage(1);
        handleSearch()
    }
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleDetails = (imageId) => {
    navigate('/details', { state: { imageId } });
  };

  return (
    <div style={{ padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
            Image Search Application
          </Typography>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
        <TextField
          label="Search for images"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          variant="outlined"
          size="small"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          style={{ width: '300px' }} 
          placeholder="Type and hit Enter..."
        />
      </div>
      {images.length > 0 && (
        <>
          <Grid container spacing={2}>
            {images.map((image) => (
              <Grid item xs={12} sm={6} md={4} key={image.id}>
                <Card onClick={() => handleDetails(image.id)} style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="img"
                    image={image.urls.small}
                    alt={image.alt_description}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
          {totalPages > 1 && (
            <Pagination 
              count={totalPages}
              page={page}
              onChange={handlePageChange}
              style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}
            />
          )}
        </>
      )}
    </div>
  );
};

export default HomePage;
