import { Loading } from "@/common/Loading";
import { HomePage } from "@/layout/home";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return loading ? <Loading /> : <HomePage />;
}
