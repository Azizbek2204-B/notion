export class CreateDeviceDto {
  user_id: number;
  name: string;
  last_active: Date;
  location: string;
  information: object;
}
