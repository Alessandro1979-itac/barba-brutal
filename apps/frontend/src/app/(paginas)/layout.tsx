'use client'
import { ProvedorUsuario } from '@/src/data/contexts/ContextoUsuario'

export default function Layout({ children }: any) {
  return <ProvedorUsuario>{children}</ProvedorUsuario>
}