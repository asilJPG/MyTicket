import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { Admin } from './models/admin.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class AdminService {
  constructor(@InjectModel(Admin) private adminRepo: typeof Admin) {}

  async createAdmin(createAdminDto: CreateAdminDto): Promise<Admin> {
    const admin = await this.adminRepo.create(createAdminDto);
    return admin;
  }
  async getAllAdmins(): Promise<Admin[]> {
    const admin = await this.adminRepo.findAll();
    return admin;
  }
  async getOneAdmin(id: number) {
    const admin = await this.adminRepo.findOne({ where: { id } });
    return admin;
  }
  async deleteAdmin(id: number) {
    const admin = await this.adminRepo.destroy({ where: { id } });
    console.log(admin);
    return admin;
  }
}
