import {
  useCallback, useEffect, useRef, useState,
} from 'react';

export const useFetchAPI = (firstUrl) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(true);
  const [pokemonData, setPokemonData] = useState({ results: [] });
  const firstRenderRef = useRef(true);
  const isMountedRef = useRef(null);

  const getPokemonDataApi = useCallback(async (url) => {
    if (!loading && url) {
      let errorFound = '';
      let data = [];

      setLoading(true);
      try {
        const resp = await fetch(
          url,
        );
        data = await resp.json();
      } catch (e) {
        errorFound = 'Error when consulting pokemons';
      } finally {
        setError(errorFound);
        if (isMountedRef.current) {
          setLoading(false);
          if (!errorFound) {
            setPokemonData((prev) => {
              if (url !== firstUrl) {
                data.results = [...prev.results, ...data.results];
              }
              return data;
            });
          }
        }
      }
    }
  }, [loading, firstUrl]);

  useEffect(() => {
    isMountedRef.current = true;
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      getPokemonDataApi(firstUrl);
    }
    return () => { isMountedRef.current = false; };
  }, [getPokemonDataApi, firstUrl]);

  return {
    loading,
    error,
    pokemonData,
    fetchMore: () => getPokemonDataApi(pokemonData.next),
  };
};
