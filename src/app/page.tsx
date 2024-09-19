'use client'
import NavMenu from "../components/header/header";
import ListaTarefas from "../components/listaTarefas/listaTarefas";
import Modal from "../components/modals/novaTarefa";






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
