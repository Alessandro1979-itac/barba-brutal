'use client'
import { ProvedorSessao } from '@/src/data/contexts/ContextoSessao'
import { ProvedorUsuario } from '@/src/data/contexts/ContextoUsuario'

export default function Layout({ children }: any) {
    return (
        <ProvedorSessao>
            <ProvedorUsuario>{children}</ProvedorUsuario>
        </ProvedorSessao>
    )
}
