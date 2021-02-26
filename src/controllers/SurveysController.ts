import { Request, Response } from "express";
import { getCustomRepository, Repository } from "typeorm";
import { Survey } from "../models/Survey";
import { SurveysRepository } from "../repositories/SurveysRepository";
 
 class SurveysController {

    async create(request: Request, response: Response){
        const { title, description } = request.body;

        const surveysRepository = getCustomRepository(SurveysRepository);

        const survey = surveysRepository.create({
           title,
           description
        });

        await surveysRepository.save(survey);
        console.log(response.status);
        return response.status(201).json(survey);
    }

    async show (request: Request, response: Response){
       const surveysRepository = getCustomRepository(SurveysRepository);

       const all = await surveysRepository.find();

       return response.json(all);
    }
 }

 export { SurveysController }