import React, { createContext, useState, useContext } from 'react';

const ImageContext = createContext();

export const useImageContext = () => useContext(ImageContext);

export const ImageProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  return (
    <ImageContext.Provider value={{ images, setImages, totalPages, setTotalPages,query,setQuery,page,setPage }}>
      {children}
    </ImageContext.Provider>
  );
};
