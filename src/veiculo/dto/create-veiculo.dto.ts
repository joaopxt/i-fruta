import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateVeiculoDto {
  @IsNumber()
  entregadorId: number;

  @IsNotEmpty()
  @IsString()
  tipo: string;

  @IsOptional()
  @IsString()
  placa?: string;

  @IsOptional()
  @IsNumber()
  renavam?: number;
}
