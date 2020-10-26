import {
  useCallback, useEffect, useRef, useState,
} from 'react';
import { customFetch } from '../utils/customFetch';
import { useIsMountedRef } from './useIsMountedRef';

export const useFetchAPI = (firstUrl) => {
  const [state, setState] = useState({ loading: false, error: '' });
  const [pokemonData, setPokemonData] = useState({ results: [] });
  const firstRenderRef = useRef(true);
  const isMountedRef = useIsMountedRef();
  const { loading, error } = state;

  const getPokemonDataApi = useCallback((url) => {
    if (!loading && url) {
      const errorFound = '';
      setState((prev) => ({ ...prev, loading: true }));
      customFetch(url).then((data) => {
        if (isMountedRef.current) {
          if (!errorFound) {
            setPokemonData((prev) => {
              let newResult = [];
              if (url === firstUrl) {
                newResult = data.results;
              } else {
                newResult = [...prev.results, ...data.results];
              }
              return { ...data, results: newResult };
            });
            setState({ loading: false, error: '' });
          }
        }
      }).catch(() => {
        setState({ loading: false, error: 'Error when consulting pokemons' });
      });
    }
  }, [loading, firstUrl, isMountedRef]);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      getPokemonDataApi(firstUrl);
    }
  }, [getPokemonDataApi, firstUrl]);

  return {
    loading,
    error,
    pokemonData,
    fetchMore: () => getPokemonDataApi(pokemonData.next),
  };
};
