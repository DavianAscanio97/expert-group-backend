import { Response } from "@core/domain/models/reponse-http.model"

export interface BreedInputPort {
    getAllBreeds(): Promise<Response>
    getBreedById(id: string): Promise<Response>
}
