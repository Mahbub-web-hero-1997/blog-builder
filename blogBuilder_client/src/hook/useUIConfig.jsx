import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const useUIConfig = () => {
  const {
    data: layoutData = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["layouts"],
    queryFn: async () => {
      const res = await axios.get("/layout-config.json");
      return res.data || [];
    },
  });

  return [layoutData, refetch, isLoading];
};

export default useUIConfig;
