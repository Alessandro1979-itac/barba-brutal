'use client'
import { Suspense } from 'react'
import FormUsuario from '@/src/components/usuario/FormUsuario'

export default function Page() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <FormUsuario />
    </Suspense>
  )
}