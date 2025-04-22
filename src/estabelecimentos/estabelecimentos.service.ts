import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Estabelecimento } from './entities/estabelecimento.entity';
import { CreateEstabelecimentoDto } from './dto/create-estabelecimento.dto';
import { UpdateEstabelecimentoDto } from './dto/update-estabelecimento.dto';
@Injectable()
export class EstabelecimentoService {
  constructor(
    @InjectRepository(Estabelecimento)
    private estabelecimentoRepository: Repository<Estabelecimento>,
  ) {}

  create(createEstabelecimentoDto: CreateEstabelecimentoDto) {
    const estabelecimento = this.estabelecimentoRepository.create(
      createEstabelecimentoDto,
    );
    return this.estabelecimentoRepository.save(estabelecimento);
  }

  findAll() {
    return this.estabelecimentoRepository.find({
      relations: ['entregadores'],
    });
  }

  findOne(id: number) {
    return this.estabelecimentoRepository.findOne({
      where: { id },
      relations: ['entregadores'],
    });
  }

  async update(id: number, updateEstabelecimentoDto: UpdateEstabelecimentoDto) {
    const estabelecimento = await this.estabelecimentoRepository.findOneBy({
      id,
    });

    if (!estabelecimento) {
      throw new Error('Estabelecimento não encontrado');
    }

    Object.assign(estabelecimento, updateEstabelecimentoDto);
    return this.estabelecimentoRepository.save(estabelecimento);
  }

  async remove(id: number) {
    await this.estabelecimentoRepository.delete(id);
    return { deleted: true };
  }
}
