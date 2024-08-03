'use client'
import { ProvedorAgendamento } from '@/src/data/contexts/ContextoAgendamento'
import ForcarUsuario from '@/src/components/shared/ForcarUsuario'
import Pagina from '@/src/components/shared/Pagina'

export default function Layout(props: any) {
    return (
        <ForcarUsuario>
            <ProvedorAgendamento>
                <Pagina>{props.children}</Pagina>
            </ProvedorAgendamento>
        </ForcarUsuario>
    )
}
