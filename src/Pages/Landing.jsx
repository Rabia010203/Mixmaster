import axios from "axios";
import SearchForm from "../Components/SearchForm";
import { useLoaderData } from "react-router-dom";
import CocktailLists from "../Components/CocktailLists";
import { useQuery } from "@tanstack/react-query";
const SearchDrinksUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const searchCocktailQuery = (searchTerm) => {
  return {
    queryKey: ["search", searchTerm || "all"],
    queryFn: async () => {
      const res = await axios.get(`${SearchDrinksUrl}${searchTerm}`);
      return res.data.drinks;
    },
  };
};
export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    // console.log(url)
    const searchTerm = url.searchParams.get("search") || "";
    await queryClient.ensureQueryData(searchCocktailQuery(searchTerm));
    //
    // console.log(res);
    return { searchTerm };
  };
const Landing = () => {
  const { searchTerm } = useLoaderData();
  const { data: drinks } = useQuery(searchCocktailQuery(searchTerm));

  if (!drinks) {
    return (
      <section className="page">
        <h2>NO Matches found..</h2>
      </section>
    );
  }
  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailLists drinks={drinks} />
    </>
  );
};

export default Landing;
