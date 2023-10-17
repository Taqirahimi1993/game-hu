import React from "react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { genras } = useGenres();
  return (
    <ul>
      {genras.map((genra) => (
        <li key={genra.id}>{genra.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
