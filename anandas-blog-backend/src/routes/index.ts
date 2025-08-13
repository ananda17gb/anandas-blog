import { Router } from "express";
import blogsRoutes from "./api/blogs";
import userRoutes from "./api/user";

const router = Router();

router.get("/", (req, res) => {
  res.send("Backend is up!")
})
router.use("/user", userRoutes);
router.use("/blogs", blogsRoutes);


export default router;
