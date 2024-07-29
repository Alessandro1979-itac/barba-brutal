'use client'

import NossosClientes from '@/src/components/cliente/NossosClientes'
import TituloSlogan from '@/src/components/landing/TituloSlogan'
import NossosProfissionais from '@/src/components/profissional/NossosProfissionais'
import NossosServicos from '@/src/components/servico/NossosServicos'
import ContainerComBackground from '@/src/components/shared/ContainerComBackground'


export default function Landing() {
  return (
    <div>
      <TituloSlogan />
      <ContainerComBackground imagem="/banners/servicos.webp">
        <NossosServicos />
      </ContainerComBackground>

      <ContainerComBackground imagem="/banners/profissionais.webp">
        <NossosProfissionais />
      </ContainerComBackground>

      <ContainerComBackground imagem="/banners/clientes.webp">
        <NossosClientes />
      </ContainerComBackground>
    </div>
  );
}
