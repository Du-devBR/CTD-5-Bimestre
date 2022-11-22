import {createBrowserRouter, RouterProvider, Route,} from "react-router-dom";


// import { LoginPage } from "./pages/Login"
// import { SegundaAula } from "./aulas/SegundaAula"
// import { TerceiraAula } from "./aulas/TerceiraAula/TerceiraAula"
import { DecimaQuintaAula } from "./aulas/DecimaQuintaAula"
import { OitavaAula } from "./aulas/OitavaAula"
import { QuartaAula } from "./aulas/QuartaAula"
import { QuintaAula } from "./aulas/QuintaAula"
import { SetimaAula } from "./aulas/SetimaAula"
import { MainAppLayout } from "./components/MainAppLayout";

export function App() {

  const appRouter = createBrowserRouter([
    {
      path: "",
      element: <MainAppLayout />,

      //utilizar para quando um componente utiliza outros componentes como filhas
      children: [
        {
          path: 'decima-quinta-aula',
          element: <DecimaQuintaAula />
        },
        {
          path: 'oitava-aula',
          element: <OitavaAula />
        }
      ]
    },
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}
