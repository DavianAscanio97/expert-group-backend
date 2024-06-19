
import { Injectable } from '@nestjs/common'
import { BreedService } from '@core/domain/services/breed.service'
import { responseSuccess } from '../utils/reponses.util'

@Injectable()
export class BreedUseCase {
    constructor(
        private breedService: BreedService
    ) {}

    async getAllBreeds(): Promise<any> {
        const response = await this.breedService.getAllBreeds()
        return responseSuccess('Listado de gatos', response )
    }
    async getBreedById(id: string): Promise<any> {
        const response = await this.breedService.getBreedById(id)
        return responseSuccess('Información del gato', response )
    }

}
