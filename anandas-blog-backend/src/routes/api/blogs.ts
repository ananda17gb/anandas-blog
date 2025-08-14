import { Router } from "express";
import { PrismaClient } from "../../generated/prisma/"

const prisma = new PrismaClient();
const router = Router();

router.get("/fetch-blogs", async (req, res) => {
  try {
    const blogs = await prisma.blog.findMany();
    res.status(200).send({
      "message": "Blogs successfully fetched",
      "fetchedBlogs": [...blogs]
    });
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.get("/fetch-author-blogs/:authorId", async (req, res) => {
  const authorId = req.params.authorId;
  try {
    const authorBlogs = await prisma.blog.findMany({ where: { authorId } });
    res.status(200).send({
      "message": "Author's blogs successfully fetched",
      "fetchAuthorBlogs": [...authorBlogs]
    });
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// TODO: images goes to supabase storage
router.post("/create-blog", async (req, res) => {
  const { role, title, content, author, authorId, images } = req.body;
  if (!title || !content || !authorId) return res.status(400).json({ error: "There are missing required fields, please provide all of them to procede creating blogs" })
  try {
    if (role !== "AUTHOR" && role !== "ADMIN") return res.status(403).json({ error: "Only admin and author can create blogs" });
    const newBlog = await prisma.blog.create({
      data: {
        title: title,
        content: content,
        author: author,
        authorId: authorId,
        images: images,
        published: true,
      }
    })
    res.status(201).send({
      "message": "Blog successfully created",
      "createdBlog": { ...newBlog }
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.delete("/delete-blog/:blogId", async (req, res) => {
  const blogId = req.params.blogId;
  const { role, authorId } = req.body;
  try {
    if (role !== "AUTHOR" && role !== "ADMIN") return res.status(403).json({ error: "Only admin and author can delete blogs" });
    const blog = await prisma.blog.findUnique({ where: { id: blogId } })
    if (!blog) return res.status(404).json({ error: "No blog found" })
    if (blog?.authorId !== authorId && role !== "ADMIN") return res.status(403).json({ error: "This blog is not yours, you can't delete it." })
    await prisma.blog.delete({ where: { id: blogId } })
    res.status(200).send({
      "message": "Blog successfully deleted",
      "deletedBlog": { ...blog }
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

router.patch("/edit-blog/:blogId", async (req, res) => {
  const blogId = req.params.blogId;
  const { title, content, images, role, authorId } = req.body
  try {
    if (role !== "AUTHOR" && role !== "ADMIN") return res.status(403).json({ error: "Only admin and author can edit blogs" });
    const blog = await prisma.blog.findUnique({ where: { id: blogId } })
    if (!blog) return res.status(404).json({ error: "No blog found" })
    if (blog?.authorId !== authorId && role !== "ADMIN") return res.status(403).json({ error: "This blog is not yours, you can't edit it." })
    const updatedBlog = await prisma.blog.update({ where: { id: blogId }, data: { title: title, content: content, images: images } })
    res.status(200).send({
      "message": "Blog successfully edited",
      "editedBlog": { ...updatedBlog }
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default router;
