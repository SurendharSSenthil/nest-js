import { createUser } from "./createDto";
import { PartialType } from "@nestjs/mapped-types";

export class updateUser extends PartialType(createUser) {}