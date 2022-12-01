import {createBrowserRouter, RouterProvider, Route,} from "react-router-dom";


// import { LoginPage } from "./pages/Login"
// import { SegundaAula } from "./aulas/SegundaAula"
// import { TerceiraAula } from "./aulas/TerceiraAula/TerceiraAula"
import { DecimaQuintaAula } from "./aulas/DecimaQuintaAula"
import { DecimaSextaAula } from "./aulas/DecimaSextaAula";
import { OitavaAula } from "./aulas/OitavaAula"
import { QuartaAula } from "./aulas/QuartaAula"
import { QuintaAula } from "./aulas/QuintaAula"
import { SetimaAula } from "./aulas/SetimaAula"
import { DecimaSextaAulaComponent } from "./components/DecimaSextaAulaComponent";
import { CommentComponent } from "./components/DecimaSextaAulaComponent/CommentsComponent";
import { MainAppLayout } from "./components/MainAppLayout";
import { LanguageProvider } from "./hooks/UseLanguage/useLanguage";
import { ThemeProvider } from "./hooks/UseTheme/UseTheme";
import { Configuration } from "./pages/Configurations";

export function App() {

  const appRouter = createBrowserRouter([
    {
      path: "",
      element: <MainAppLayout />,

      //utilizar para quando um componente utiliza outros componentes como filhas
      children: [
        {
          path: 'quarta-aula',
          element: <QuartaAula />
        },
        {
          path: 'decima-quinta-aula',
          element: <DecimaQuintaAula />
        },
        {
          path: 'setima-aula',
          element: <SetimaAula />
        },
        {
          path: 'oitava-aula',
          element: <OitavaAula />
        },
        {
          path: 'quinta-aula',
          element: <QuintaAula />
        },
        {
          path: 'decima-sexta-aula',
          element: <DecimaSextaAula />,
          children: [
            {
              path: 'post',
              element: <DecimaSextaAulaComponent />
            },
            {
              path: 'post/comment/:id',
              element: <CommentComponent />
            }
          ]
        },
        {
          path: 'decima-setima-aula',
          element: <DecimaSextaAula />
        },
        {
          path: 'configuration',
          element: <Configuration />
        }

      ]
    },
  ]);

  return (
    <LanguageProvider>
      <ThemeProvider>
        <RouterProvider router={appRouter} />
      </ThemeProvider>
    </LanguageProvider>
  )
}
