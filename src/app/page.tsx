'use client'
import NavMenu from "../components/header/header";
import ListaTarefas from "../components/listaTarefas/listaTarefas";







export default function Home() {
  return (
    <div >
      
      <main>
        <NavMenu/>
        <ListaTarefas/>
        </main>
    </div>
  );
}
