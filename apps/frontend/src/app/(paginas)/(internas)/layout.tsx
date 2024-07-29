'use client'
import ForcarUsuario from '@/src/components/shared/ForcarUsuario'
import Pagina from '@/src/components/shared/Pagina'
import { ProvedorAgendamento } from '@/src/data/contexts/ContextoAgendamento'

export default function Layout(props: any) {
  return (
    <ForcarUsuario>
      <ProvedorAgendamento>
        <Pagina>{props.children}</Pagina>
      </ProvedorAgendamento>
    </ForcarUsuario>
  )
}