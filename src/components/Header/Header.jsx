import Filters from "../Filters/Filters";

export default function Header({title}) {
  return (
    <header>
      <h2>{title} 🛒</h2>
      <Filters />
    </header>
  )
}
