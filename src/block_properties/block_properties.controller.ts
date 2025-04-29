import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BlockPropertiesService } from './block_properties.service';
import { CreateBlockPropertyDto } from './dto/create-block_property.dto';
import { UpdateBlockPropertyDto } from './dto/update-block_property.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BlockProperty } from './models/block_property.model';

@ApiTags('BlockProperties')
@Controller('block-properties')
export class BlockPropertiesController {
  constructor(private readonly blockPropertiesService: BlockPropertiesService) {}

  @ApiOperation({ summary: 'BlockProperty qo‘shish' })
  @ApiResponse({
    status: 201,
    description: 'BlockProperty muvaffaqiyatli yaratildi',
    type: BlockProperty,
  })
  @Post()
  create(@Body() createBlockPropertyDto: CreateBlockPropertyDto) {
    return this.blockPropertiesService.create(createBlockPropertyDto);
  }

  @ApiOperation({ summary: 'Barcha block property larni olish' })
  @ApiResponse({
    status: 200,
    description: 'BlockProperties muvaffaqiyatli olindi',
    type: [BlockProperty],
  })
  @Get()
  findAll() {
    return this.blockPropertiesService.findAll();
  }

  @ApiOperation({ summary: 'ID bo‘yicha block property olish' })
  @ApiResponse({
    status: 200,
    description: 'BlockProperty muvaffaqiyatli topildi',
    type: BlockProperty,
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blockPropertiesService.findOne(+id);
  }

  @ApiOperation({ summary: 'BlockProperty yangilash' })
  @ApiResponse({
    status: 200,
    description: 'BlockProperty muvaffaqiyatli yangilandi',
    type: BlockProperty,
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBlockPropertyDto: UpdateBlockPropertyDto) {
    return this.blockPropertiesService.update(+id, updateBlockPropertyDto);
  }

  @ApiOperation({ summary: 'BlockProperty o‘chirish' })
  @ApiResponse({
    status: 200,
    description: 'BlockProperty muvaffaqiyatli o‘chirildi',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blockPropertiesService.remove(+id);
  }
}