import Article from "../models/Article.js";

// Get all articles
export const getArticles = async (req, res) => {
  try {
    const articles = await Article.find();
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new article
export const createArticle = async (req, res) => {
  const { title, content, status } = req.body;
  try {
    const article = new Article({ title, content, status });
    const savedArticle = await article.save();
    res.status(201).json(savedArticle);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update article status
export const updateArticleStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    const article = await Article.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    res.status(200).json(article);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
