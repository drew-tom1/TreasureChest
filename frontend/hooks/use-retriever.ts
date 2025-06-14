import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { z } from "zod";

export const memberSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string(),
  status: z.string(),
  crossing_class: z.string(),
  total_balance: z.number(),
  amount_paid: z.number(),
  created_at: z.string(),
})

const memberArraySchema = z.array(memberSchema);
type Member = z.infer<typeof memberSchema>;

type APIResponse = {
  usersList: unknown
}

const BASE_API_URL = process.env.API_URL || "http://localhost:4000/api"

const useListRetriever = () => {
  const [data, setData] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

    const fetchData = useCallback(async () => {
      try {
        const result = await axios.get<APIResponse>(`${BASE_API_URL}/retrieve-user-list`);
        const validated = memberArraySchema.parse(result.data.usersList);
        setData(validated);
        console.log(validated)
      } catch (err: unknown) {
        if (err instanceof z.ZodError) {
          setError("Validation failed: " + err.message);
          console.error(err.format());
        } else if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Something went wrong (useListRetriever)");
        }
      } finally {
        setLoading(false);
      }
    }, []);

  useEffect(() => {
    fetchData()
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
};

export default useListRetriever;
