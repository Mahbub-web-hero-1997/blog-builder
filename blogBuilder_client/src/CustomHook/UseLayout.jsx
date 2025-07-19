// src/hooks/useLayoutData.js
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchLayoutData = async () => {
  const res = await axios.get("/layout.json");
  return res.data;
};

const useLayout = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["layoutData"],
    queryFn: fetchLayoutData,
  });

  const navbarConfig = data?.sections?.find(
    (section) => section.type === "navbar"
  );

  const productSectionConfig = data?.sections?.find(
    (section) => section.type === "productCardSection"
  );

  return {
    layoutData: data,
    navbarConfig,
    productSectionConfig,
    isLoading,
    isError,
    error,
  };
};

export default useLayout;
