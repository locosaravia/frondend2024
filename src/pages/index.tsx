
import Link from "next/link";
import { Perfil } from "./Componentes/Perfil";

export default function Home(){
  return(
    <>
    <nav>{/*
    buscar: useeffect, usestate
    */}
      <p>
        <Link href="Pagina2">Pagina2</Link>
        <Link href="Pagina1">Pagina1</Link>
        <Link href= "About">
        about
        </Link>
      </p>
    </nav>
    <p>hola</p>
    <Perfil nombre="Luciano" apellido="Carrizo" edad={20}/>
    <Perfil nombre="Alvaro" apellido="Saravia" edad={21}/>
    </>
  );
}