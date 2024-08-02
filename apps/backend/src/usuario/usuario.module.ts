import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { UsuarioMiddleware } from './usuario.middleware';
import { UsuarioRepository } from './usuario.repository';
import { UsuarioController } from './usuario.controller';
import { BcryptProvider } from './bcrypt.provider';

@Module({
  imports: [DbModule],
  exports: [UsuarioMiddleware, UsuarioRepository],
  controllers: [UsuarioController],
  providers: [UsuarioMiddleware, UsuarioRepository, BcryptProvider],
})
export class UsuarioModule {}
