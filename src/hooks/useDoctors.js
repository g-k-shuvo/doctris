import { useEffect, useState } from "react";

const useDoctors = () => {
  const [loading, setLoading] = useState(true);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch("./doctors.json")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setDoctors(data);
      });
  }, []);
  return [loading, doctors];
};

export default useDoctors;
