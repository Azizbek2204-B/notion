import { PartialType } from "@nestjs/swagger";
import { CreateDeviceDto } from "./create-device.dto";

export class UpdateDeviceDto extends PartialType(CreateDeviceDto) {
  user_id: number;
  name: string;
  last_active: Date;
  location: string;
  information: object;
}
