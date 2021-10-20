import { useEffect, useState } from "react";

const useService = (id) => {
  const [service, setService] = useState({});

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => {
        setService(data.find((s) => s.id === parseInt(id)));
      });
  }, [id]);
  return { service };
};

export default useService;
