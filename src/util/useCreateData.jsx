import React, { useState } from "react";
import { supabase } from "../lib/supabase";

export default function useCreateData() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const create = async (tableName, arrayData) => {
    setLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase.from(tableName).insert([arrayData]).select();
      if (error) return;
      return data;
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return { create, error, loading };
}
