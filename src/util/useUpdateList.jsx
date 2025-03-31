import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function useUpdateList(tableName) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUpdate = async () => {
    try {
      const { data, error } = await supabase.from(tableName).select("*");
      if (error) return;
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUpdate();
  }, [tableName]);

  return { data, error, loading };
}
