
import express from "express";
import {deleteComment, getFeedPosts , getUserPosts , likePost, postComment,deletePost  } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";
const router = express.Router();

// read
router.get("/" , verifyToken , getFeedPosts);
router.get("/:userId/posts" , verifyToken , getUserPosts);

// update
router.patch("/:id/like" , verifyToken , likePost);
router.patch("/:postId/:userId/comment/delete" , verifyToken , deleteComment)


// POST
router.post("/:postid/:userId/comment" , verifyToken, postComment);

// delete
router.delete("/:id", verifyToken, deletePost);


export default router;