import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BlocksService } from './blocks.service';
import { CreateBlockDto } from './dto/create-block.dto';
import { UpdateBlockDto } from './dto/update-block.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Block } from './models/block.model'; // Modelga to'g'ri import

@ApiTags('Blocks')
@Controller('blocks')
export class BlocksController {
  constructor(private readonly blocksService: BlocksService) {}

  @ApiOperation({ summary: 'Block qo‘shish' })
  @ApiResponse({
    status: 201,
    description: 'Block muvaffaqiyatli yaratildi',
    type: Block,
  })
  @Post()
  create(@Body() createBlockDto: CreateBlockDto) {
    return this.blocksService.create(createBlockDto);
  }

  @ApiOperation({ summary: 'Barcha blocklarni olish' })
  @ApiResponse({
    status: 200,
    description: 'Blocklar muvaffaqiyatli olindi',
    type: [Block],
  })
  @Get()
  findAll() {
    return this.blocksService.findAll();
  }

  @ApiOperation({ summary: 'ID bo‘yicha blockni olish' })
  @ApiResponse({
    status: 200,
    description: 'Block muvaffaqiyatli topildi',
    type: Block,
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.blocksService.findOne(+id);
  }

  @ApiOperation({ summary: 'Blockni yangilash' })
  @ApiResponse({
    status: 200,
    description: 'Block muvaffaqiyatli yangilandi',
    type: Block,
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBlockDto: UpdateBlockDto) {
    return this.blocksService.update(+id, updateBlockDto);
  }

  @ApiOperation({ summary: 'Blockni o‘chirish' })
  @ApiResponse({
    status: 200,
    description: 'Block muvaffaqiyatli o‘chirildi',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.blocksService.remove(+id);
  }
}
