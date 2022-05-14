import { Handler } from "express";
import { PrismaClient } from '@prisma/client'

// Instantiate Prisma Client
const prisma = new PrismaClient()

export const getReports: Handler = async (req, res) => {
  try {

  //console.log(req.session.user);
    const pages = await prisma.report.findMany({
    });
    return res.json(pages)
  } catch (e) {
    //console.log(e); 
    return res.status(500).json('Internal Server error');
  }
  
}



export const postReport: Handler = async (req , res) => {
  try {
    const pageData = req.body;
    console.log(pageData);
    await prisma.report.create({
      data: {
        ...pageData
      }
    });
    return res.json(pageData);
  } catch (error) {
    console.log(error)
    return res.status(500).json('Internal Server error');
  }
  
};