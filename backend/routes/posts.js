const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

// 投稿を作成する
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    return res.status(200).json(savedPost);
  } catch {
    return res.status(500).json(err);
  }
});

// 投稿を更新する
router.put("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({
        $set: req.body,
      });
      return res.status(200).json("投稿の更新完了です。");
    } else {
      return res.stataus(403).json("あなたはほかの人の投稿を編集できません。");
    }
  } catch (err) {
    return res.status(403).json(err);
  }
});

// 投稿の削除
router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      return res.status(200).json("投稿削除に成功しました。");
    } else {
      return res.status(500).json("自分以外の投稿は削除できません。");
    }
  } catch (err) {
    return res.status(403).json(err);
  }
});

// 投稿の1件取得
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    return res.status(200).json(post);
  } catch (err) {
    return res.status(403).json(err);
  }
});

// 特定の投稿へいいねを押す
router.put("/:id/like", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    const user = await User.findById(req.body.userId);
    // まだいいねが押されていない場合は押せる
    if (!post.likes.includes(user.id)) {
      await post.updateOne({
        $push: {
          likes: req.body.userId,
        },
      });
      return res.status(200).json("いいねが完了しました。");
    } else {
      await post.updateOne({
        $pull: {
          likes: req.body.userId,
        },
      });
      return res.status(200).json("投稿からいいねを外しました。");
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});

// タイムラインの投稿を取得
router.get("/timeline/all", async (req, res) => {
  try {
    const currentUser = await User.findById(req.body.userId);
    const userPosts = await Post.find({ userId: currentUser._id });

    // フォローしている人の投稿を取得
    // currentUserの取得方法は非同期なので、いつ取得できるかわからないため、Promise.allで待つ
    const frendPosts = await Promise.all(
      currentUser.followings.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );
    return res.status(200).json(userPosts.concat(...frendPosts));
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;