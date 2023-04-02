import { NextFunction, Request, Response } from "express";
import mongoose from "mongoose";
import Author from "../models/Author";

const createAuthor = (req: Request, res: Response) => {
    const { name } = req.body

    return Author.create({
        _id: new mongoose.Types.ObjectId(),
        name: name
    })
        .then((author) => res.status(200).json({ author }))
        .catch((err) => res.status(500).json({ err }))
}
const readAuthor = async (req: Request, res: Response) => {
    const authorId = req.params.authorId
    try {
        const author = await Author.findById(authorId);
        return author
            ? res.status(200).json({ author })
            : res.status(404).json({ message: 'Not Found' });
    } catch (err) {
        return res.status(500).json({ err });
    }
}
const readAll = (req: Request, res: Response) => {
    return Author.find({})
        .then((authors) => authors
            ? res.status(200).json({ authors })
            : res.status(404).json({ message: 'Not Found' }))
        .catch((err) => res.status(500).json({ err }))
}
const updateAuthor = (req: Request, res: Response) => { }
const deletAuthor = (req: Request, res: Response) => { }

export default { createAuthor, readAuthor, readAll }