import { Router } from "express";
import { PrismaClient } from "../../generated/prisma/"
import { supabase } from "../../config/supabase";

const prisma = new PrismaClient();
const router = Router();

router.get("/fetch-blogs", async (req, res) => {
  try {
    const blogs = await prisma.blog.findMany();
    res.status(200).json({
      success: true,
      "message": "Blogs successfully fetched",
      "fetchedBlogs": [...blogs]
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message })
  }
})

router.get("/fetch-author-blogs/:authorId", async (req, res) => {
  const authorId = req.params.authorId;
  try {
    const authorBlogs = await prisma.blog.findMany({ where: { authorId } });
    res.status(200).json({
      success: true,
      "message": "Author's blogs successfully fetched",
      "fetchAuthorBlogs": [...authorBlogs]
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message })
  }
})

router.post("/create-blog", async (req, res) => {
  const { role, title, content, author, authorId, images } = req.body;
  if (!title || !content || !authorId || !author) return res.status(400).json({ error: "There are missing required fields, please provide all of them to procede creating blogs" })
  if (role !== "AUTHOR" && role !== "ADMIN") return res.status(403).json({ error: "Only admin and author can create blogs" });
  try {
    const newImages: string[] = [];
    if (images) {
      if (!Array.isArray(images)) return res.status(400).json({ error: "Images needed to be in an array even though there's only one image" });
      for (let index = 0; index < images.length; index++) {
        const element = images[index];
        const { error: uploadError } = await supabase.storage.from("blog-images").upload(`/blog-images/${Date.now()}_${element}`, element);
        if (uploadError) {
          throw uploadError;
        }
        const { data: { publicUrl } } = supabase.storage.from("blog-images").getPublicUrl(`/blog-images/${Date.now()}_${element}`);
        if (publicUrl) { newImages.push(publicUrl); }
      }
    }
    const newBlog = await prisma.blog.create({
      data: {
        title: title,
        content: content,
        author: author,
        authorId: authorId,
        images: newImages,
        published: true,
      }
    })
    res.status(201).json({
      success: true,
      "message": "Blog successfully created",
      "createdBlog": { ...newBlog }
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message })
  }
})

router.delete("/delete-blog/:blogId", async (req, res) => {
  const blogId = req.params.blogId;
  const { role, authorId } = req.body;
  if (role !== "AUTHOR" && role !== "ADMIN") return res.status(403).json({ error: "Only admin and author can delete blogs" });
  try {
    const blog = await prisma.blog.findUnique({ where: { id: blogId } })
    if (!blog) return res.status(404).json({ error: "No blog found" })
    if (blog?.authorId !== authorId && role !== "ADMIN") return res.status(403).json({ error: "This blog is not yours, you can't delete it." })
    await prisma.blog.delete({ where: { id: blogId } })
    res.status(200).json({
      success: true,
      "message": "Blog successfully deleted",
      "deletedBlog": { ...blog }
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message })
  }
})

router.patch("/edit-blog/:blogId", async (req, res) => {
  const blogId = req.params.blogId;
  const { title, content, images, role, authorId } = req.body
  if (role !== "AUTHOR" && role !== "ADMIN") return res.status(403).json({ error: "Only admin and author can edit blogs" });
  try {
    const blog = await prisma.blog.findUnique({ where: { id: blogId } })
    if (!blog) return res.status(404).json({ error: "No blog found" })
    if (blog?.authorId !== authorId && role !== "ADMIN") return res.status(403).json({ error: "This blog is not yours, you can't edit it." })
    const updatedBlog = await prisma.blog.update({ where: { id: blogId }, data: { title: title, content: content, images: images } })
    res.status(200).json({
      success: true,
      "message": "Blog successfully edited",
      "editedBlog": { ...updatedBlog }
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message })
  }
})

export default router;
