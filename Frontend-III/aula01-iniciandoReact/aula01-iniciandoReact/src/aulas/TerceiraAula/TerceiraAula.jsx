import { Card } from "./components/Card"
import { YoutubeLogo } from 'phosphor-react'
import './terceiraAula.scss'
import { Shorts } from "./components/Shorts"
import { ButtonSelector } from "./components/Bottons"

export function TerceiraAula(){
  return (
    <>
      <div className="header">
        <h1>Lista de componentes encontrados</h1>
        <div className="logo">
          <h2>Site: Youtube</h2>
          <YoutubeLogo size={32} color="#c4302b"/>
        </div>
      </div>
      <ButtonSelector />
      <Card />
      <Shorts />
    </>

  )
}
