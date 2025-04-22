import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEstabelecimentoDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsString()
  horarioFuncionamento: string;

  @IsNotEmpty()
  @IsString()
  foto: string;
}
