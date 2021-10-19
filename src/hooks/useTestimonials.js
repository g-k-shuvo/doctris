import { useEffect, useState } from "react";

const useTestimonials = () => {
  const [loading, setLoading] = useState(true);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("./testimonials.json")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setTestimonials(data);
      });
  }, []);
  return [loading, testimonials];
};

export default useTestimonials;
