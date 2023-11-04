import { useState } from "react"
import coms, { Coms } from "./db/data"
import Card from "./components/Card"



const App = () => {
  const [data] = useState<Coms[]>(coms)
  return (
    <section className="mx-4 my-16 md:mx-auto max-w-5xl md:grid md:grid-cols-4 gap-4">
     {
      data?.map((user:Coms) => <Card user={user} key={user.id}/>)
     }
    </section>
  )
}

export default App