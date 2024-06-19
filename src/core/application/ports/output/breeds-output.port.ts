export interface BreedsOutputPort {
    getAllBreeds(): Promise<any>
    getBreedById(id: string): Promise<any>
}
