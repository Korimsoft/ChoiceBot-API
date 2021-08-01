import { ChoicesDto } from './choices-dto';

export interface PickFeedbackDto {
    originalChoices: ChoicesDto
    selectedChoices: string[];
    userFeedback: string[];
}

