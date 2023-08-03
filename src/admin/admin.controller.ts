import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { Admin } from './models/admin.model';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}
  @Post('create')
  async createAdmin(@Body() createAdminDto: CreateAdminDto) {
    return this.adminService.createAdmin(createAdminDto);
  }
  @Get('all')
  async getAllAdmin(): Promise<Admin[]> {
    return this.adminService.getAllAdmins();
  }
  @Get(':id')
  async getOneAdmin(@Param('id') id: string) {
    return this.adminService.getOneAdmin(+id);
  }
  @Delete(':id')
  async deleteAdmin(@Param('id') id: string) {
    return this.adminService.deleteAdmin(+id);
  }
}
