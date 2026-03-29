export async function fetchPokemon(
  id,
  ...[dataSetter, errorSetter, isLoadingSetter]
) {
  const url = `https://pokeapi.co/api/v2/pokemon-form/${id}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    dataSetter(data.name);
  } catch (error) {
    errorSetter(error.message);
  } finally {
    isLoadingSetter(false);
  }
}
