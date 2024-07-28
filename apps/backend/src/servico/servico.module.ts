import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { ServicoController } from './servico.controller';

@Module({
  imports: [DbModule],
  controllers: [ServicoController],
})
export class ServicoModule {}
