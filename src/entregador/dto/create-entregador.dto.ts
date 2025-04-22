import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsArray,
  IsOptional,
} from 'class-validator';

export class CreateEntregadorDto {
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsNotEmpty()
  @IsNumber()
  celular: number;

  @IsNotEmpty()
  @IsNumber()
  dataNascimento: number;

  @IsOptional()
  @IsArray()
  estabelecimentos?: number[];
}
