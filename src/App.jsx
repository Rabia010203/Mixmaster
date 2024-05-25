import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Landing,
  About,
  NewsLetter,
  ErrorPage,
  SinglePageError,
  HomePageLayout,
} from "./Pages/index";
import { loader as landingLoader } from "./Pages/Landing";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { loader as cocktailLoader } from "./Pages/Cocktail";
import Cocktail from "./Pages/Cocktail";
import { action as newsLetterAction } from "./Pages/NewsLetter";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 1000 * 60 * 5 },
  },
});
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePageLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader(queryClient),
        errorElement: <SinglePageError />,
      },
      {
        path: "cocktail/:id",
        element: <Cocktail />,
        loader: cocktailLoader(queryClient),
        errorElement: <SinglePageError />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "newsletter",
        element: <NewsLetter />,
        action: newsLetterAction,
        errorElement: <SinglePageError />,
      },
    ],
  },
]);
const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />;
      </QueryClientProvider>
    </>
  );
};
export default App;
