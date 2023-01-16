import { useState } from "react";
const baseUrl = `https://api.jikan.moe/v4`;
const useFetch = (url, config = {}) => {
  const requestedUrl = `${baseUrl}/${url}`;
  const [data, setData] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState("");
  const fetchRequest = async () => {
    try {
      setIsloading(true);
      const response = await fetch(requestedUrl, config);
      if (!response.ok) setError("Error processing the request");
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      setError("Error during communication with the server");
    } finally {
      setIsloading(false);
    }
  };
  return [data, isLoading, error, fetchRequest];
};
export default useFetch;
