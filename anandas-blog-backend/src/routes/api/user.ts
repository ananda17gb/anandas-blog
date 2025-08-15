import { PrismaClient } from "../../generated/prisma/"
import { Router } from "express";
import { supabase } from "../../config/supabase";

const prisma = new PrismaClient();
const router = Router();

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ error: "Email and password are required" });
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return res.status(400).json({ error: "Please provide a valid email" });
  if (password.length < 10) return res.status(400).json({ error: "Please provide a valid password which contains 10 or more characters" });
  try {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      return res.status(401).json({
        success: false,
        error: "Invalide credentials"
      })
    }
    res.status(200).json({
      success: true,
      "message": "You've successfully signedin"
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message })
  }
})

router.get("/fetch-author-data/:authorId", async (req, res) => {
  const authorId = req.params.authorId;
  try {
    const author = await prisma.user.findUnique({ where: { id: authorId }, omit: { password: true } })
    if (!author) return res.status(404).json({ error: "Author is not found" });
    res.status(200).json({
      success: true,
      "message": "Author data fetched",
      "authorData": { ...author }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message })
  }
})

export default router;
