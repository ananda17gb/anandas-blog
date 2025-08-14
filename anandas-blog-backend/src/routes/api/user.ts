import { PrismaClient } from "../../generated/prisma/"
import { Router } from "express";

const prisma = new PrismaClient();
const router = Router();

// TODO: integrate supabase auth
router.get("/login", async (req, res) => {

})

router.get("/fetch-author-data/:authorId", async (req, res) => {
  const authorId = req.params.authorId;
  try {
    const author = await prisma.user.findUnique({ where: { id: authorId }, omit: { password: true } })
    if (!author) return res.status(404).json({ error: "Author is not found" });
    res.status(200).send(author);
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

export default router;
