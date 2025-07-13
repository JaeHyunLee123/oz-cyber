import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function Home() {
  const { data, isPending } = useQuery({
    queryKey: ["test"],
    queryFn: async () => {
      const data = await axios.get("https://dummyjson.com/test");

      return data.data;
    },
  });

  return (
    <div>
      Home
      <div>
        {isPending
          ? "Testing data fetching"
          : data.status === "ok"
          ? "Success data fething"
          : "Error with data fetching"}{" "}
      </div>
    </div>
  );
}
