import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TypesService } from './types.service';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Type } from './models/type.model'; // Bu model mavjud bo'lishi kerak

@ApiTags('Types')
@Controller('types')
export class TypesController {
  constructor(private readonly typesService: TypesService) {}

  @ApiOperation({ summary: 'Type qo‘shish' })
  @ApiResponse({
    status: 201,
    description: 'Type muvaffaqiyatli yaratildi',
    type: Type,
  })
  @Post()
  create(@Body() createTypeDto: CreateTypeDto) {
    return this.typesService.create(createTypeDto);
  }

  @ApiOperation({ summary: 'Barcha typelarni olish' })
  @ApiResponse({
    status: 200,
    description: 'Typelar muvaffaqiyatli olindi',
    type: [Type],
  })
  @Get()
  findAll() {
    return this.typesService.findAll();
  }

  @ApiOperation({ summary: 'ID bo‘yicha type olish' })
  @ApiResponse({
    status: 200,
    description: 'Type muvaffaqiyatli topildi',
    type: Type,
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.typesService.findOne(+id);
  }

  @ApiOperation({ summary: 'Type yangilash' })
  @ApiResponse({
    status: 200,
    description: 'Type muvaffaqiyatli yangilandi',
    type: Type,
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTypeDto: UpdateTypeDto) {
    return this.typesService.update(+id, updateTypeDto);
  }

  @ApiOperation({ summary: 'Type o‘chirish' })
  @ApiResponse({
    status: 200,
    description: 'Type muvaffaqiyatli o‘chirildi',
  })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.typesService.remove(+id);
  }
}