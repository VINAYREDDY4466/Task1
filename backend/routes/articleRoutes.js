import express from "express";
import { 
  getArticles, 
  createArticle, 
  updateArticleStatus 
} from "../controllers/articleController.js";

// Initialize the router
const articlesRouter = express.Router();

// Route for fetching all articles
articlesRouter.get("/", getArticles);

// Route for creating a new article
articlesRouter.post("/", createArticle);

// Route for updating the status of an article by ID
articlesRouter.patch("/:id", updateArticleStatus);

export default articlesRouter;
