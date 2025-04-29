import { PartialType } from "@nestjs/swagger";
import { CreateCommentDto } from "./create-comment.dto";

export class UpdateCommentDto extends PartialType(CreateCommentDto) {
  content: string;
  user_id: number;
  block_id: number;
  is_edited: boolean;
}
