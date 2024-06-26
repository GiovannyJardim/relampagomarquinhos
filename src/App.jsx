import Sedans from "./components/Sedans.jsx"
import Suvs from "./components/Suvs.jsx"
import Luxuosos from "./components/Luxuosos.jsx"

export default function App() {
  return (
    <main className="min-h-svh bg-offwhitebg py-20 px-6 antialised lg:flex justify-center items-center">
      <div className="lg:flex max-w-[920px]">
        <Sedans />

        <Suvs />

        <Luxuosos />
      </div>
    </main>
  )
}
