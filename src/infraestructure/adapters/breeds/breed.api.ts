import { Injectable } from '@nestjs/common';
import { ENV } from '../config/environment.config';
import axios from "axios";
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';

@Injectable()
export class BreedApi {
   private readonly catApiUrl = ENV.BREEDS_API;
   private readonly apiKey = ENV.BREEDS_API_KEY

   constructor(private readonly httpService: HttpService) { }

   getAllBreeds() {
      const options = {
         method: 'GET',
         url: `${this.catApiUrl}/breeds`,
         headers: {
            'x-api-key': this.apiKey
         }
      };
      return axios.request(options).then(function (response) {
         return response.data
      }).catch(function (error) {
         console.error(error);
      });
   }

   getBreedById(id: string) {
      const options = {
         method: 'GET',
         url: `${this.catApiUrl}/images/search?breed_ids=${id}`,
         headers: {
            'x-api-key': this.apiKey
         }
      };
      return axios.request(options).then(function (response) {
         return response.data
      }).catch(function (error) {
         console.error(error);
      });
   }
}
