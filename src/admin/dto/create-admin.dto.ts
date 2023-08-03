export class CreateAdminDto {
  name: string;
  login: string;
  hashed_password: string;
  hashed_refreh_token: string;
  is_acctive: boolean;
  is_creator: boolean;
}
