import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <ul>
      {data.map((genra) => (
        <li key={genra.id}>{genra.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
