import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Converter from "./Components/Converter/Converter";
import ShapesCalculator from "./Components/ShapesCalc/ShapesCalculator";
import TextChip from "./Components/Converter/TextChlip";

const App = (): React.ReactNode => {
  return (
    <section id="page" className="w-full min-h-max flex flex-col gap-4 items-center py-4 px-0 h-screen bg-white dark:bg-black">
      <div className="
        w-full
        text-center 
        p-2 
        rounded
        bg-white
        dark:bg-slate-700 
        text-black
        dark:text-white   
        hover:dark:bg-slate-800 
        hover:opacity-80
      ">
        {'This project is under construction and is not yet complete. GitHub link: '}
    <a href="https://github.com/AriyanSurena/Calculator.git" target="_blank" rel="noopener noreferrer" className="text-blue-400">
    https://github.com/AriyanSurena/Calculator.git
    </a>
      </div>
      <BrowserRouter>
        <nav className="flex gap-4 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md">
          <Link
            to={'Convertor'}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >Convertor</Link>
          <Link
            to={'Shape_Calculator'}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >Shape Calculator</Link>
        </nav>

        <Routes>
          <Route path="/Convertor" element={<Converter />} />
          <Route path="/Shape_Calculator" element={<ShapesCalculator />} />
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
      </BrowserRouter>
    </section>
  )
}

export default App;