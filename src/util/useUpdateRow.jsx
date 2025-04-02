import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function useUpdateRow(tableName, id) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchUpdateRow = async () => {
    try {
      const { data, error } = await supabase.from(tableName).select("*").eq("id", id);
      if (error) return;
      setData(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUpdateRow();
  }, [tableName]);

  return { data, error, loading };
}
