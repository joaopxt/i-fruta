import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Veiculo } from './entities/veiculo.entity';
import { CreateVeiculoDto } from './dto/create-veiculo.dto';
import { UpdateVeiculoDto } from './dto/update-veiculo.dto';
import { Entregador } from '../entities/entregador.entity';

@Injectable()
export class VeiculoService {
  constructor(
    @InjectRepository(Veiculo)
    private readonly veiculoRepository: Repository<Veiculo>,
    @InjectRepository(Entregador)
    private readonly entregadorRepository: Repository<Entregador>,
  ) {}

  async create(createVeiculoDto: CreateVeiculoDto) {
    const { entregadorId, ...veiculoData } = createVeiculoDto;

    const entregador = await this.entregadorRepository.findOneBy({
      id: entregadorId,
    });

    if (!entregador) {
      throw new NotFoundException('Entregador não encontrado');
    }

    const veiculo = this.veiculoRepository.create({
      ...veiculoData,
      entregador,
    });

    return this.veiculoRepository.save(veiculo);
  }

  findAll() {
    return this.veiculoRepository.find({ relations: ['entregador'] });
  }

  async findOne(id: number) {
    const veiculo = await this.veiculoRepository.findOne({
      where: { entregadorId: id },
      relations: ['entregador'],
    });

    if (!veiculo) {
      throw new NotFoundException('Veiculo não encontrado');
    }

    return veiculo;
  }

  async update(id: number, updateVeiculoDto: UpdateVeiculoDto) {
    const veiculo = await this.veiculoRepository.preload({
      entregadorId: id,
      ...updateVeiculoDto,
    });

    if (!veiculo) {
      throw new NotFoundException('Veiculo não encontrado');
    }

    return this.veiculoRepository.save(veiculo);
  }

  async remove(id: number) {
    const veiculo = await this.veiculoRepository.findOneBy({
      entregadorId: id,
    });

    if (!veiculo) {
      throw new NotFoundException('Veiculo não encontrado');
    }

    return this.veiculoRepository.remove(veiculo);
  }
}
