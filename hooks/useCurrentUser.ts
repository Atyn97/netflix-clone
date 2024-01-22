import useSWR from "swr";

import fetcher from "@/libs/fetcher";

// fetch the data once, and keep updated
const useCurrentUser = () => {
  const { data, error, isLoading, mutate } = useSWR("/api/current", fetcher);

  return {
    data,
    error,
    isLoading,
    mutate,
  };
};

export default useCurrentUser;
