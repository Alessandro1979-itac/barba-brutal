import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { AgendamentoController } from './agendamento.controller';
import { AgendamentoRepository } from './agendamento.repository';

@Module({
  imports: [DbModule],
  controllers: [AgendamentoController],
  providers: [AgendamentoRepository],
})
export class AgendamentoModule {}
