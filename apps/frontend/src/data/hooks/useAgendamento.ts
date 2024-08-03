import { useContext } from 'react'
import { ContextoAgendamento } from '@/src/data/contexts/ContextoAgendamento'

const useAgendamento = () => useContext(ContextoAgendamento)
export default useAgendamento
