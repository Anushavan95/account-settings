import { useState, useCallback } from 'react';

type FetchMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface UseFetchOptions<T> {
  method?: FetchMethod;
  body?: T;
  headers?: HeadersInit;
}

interface FetchState<R> {
  data: R | null;
  loading: boolean;
  error: string | null;
}

export function useFetch<TRequest = any, RResponse = any>(
  url: string,
  options?: UseFetchOptions<TRequest>
) {
  const [state, setState] = useState<FetchState<RResponse>>({
    data: null,
    loading: false,
    error: null,
  });

  const fetchData = useCallback(
    async (overrideBody?: TRequest) => {
      setState({ data: null, loading: true, error: null });

      try {
        const res = await fetch(url, {
          method: options?.method || 'GET',
          headers: {
            'Content-Type': 'application/json',
            ...options?.headers,
          },
          body:
            options?.method && options.method !== 'GET'
              ? JSON.stringify(overrideBody ?? options.body)
              : undefined,
        });

        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);

        const data: RResponse | null = await res.json();
        setState({ data, loading: false, error: null });
        return data;
      } catch (error: any) {
        setState({ data: null, loading: false, error: error.message });
        return null;
      }
    },
    [url, options]
  );

  return { ...state, fetchData };
}
