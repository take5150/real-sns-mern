const User = require("../models/User");

const router = require("express").Router();

// ユーザ更新
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        // $setはUserモデルのすべてのパラメータを対象とするという意味
        $set: req.body,
      });
      res.status(200).json("ユーザ情報が更新されました");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("アカウント更新ができない権限です");
  }
});

// ユーザ削除
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id || req.body.isAdmin) {
    try {
      const user = await User.findByIdAndDelete(req.params.id);
      res.status(200).json("ユーザ情報が削除されました");
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("アカウント削除ができない権限です");
  }
});

// ユーザ取得
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, updatedAt, ...other } = user._doc;
    res.status(200).json(other);
  } catch (err) {
    res.status(403).json(err);
  }
});

// ユーザフォロー機能
router.put("/:id/follow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      // URLパラメータ側から相手のIDを取得
      const user = await User.findById(req.params.id);
      // リクエスト内で自分のIDを送る
      const currentUser = await User.findById(req.body.userId);

      // フォロワーに自分が存在しなければフォロー可能
      if (!user.followers.includes(req.body.userId)) {
        await user.updateOne({
          // $push 配列を持つプロパティに値を追加
          $push: {
            followers: req.body.userId,
          },
        });
        await currentUser.updateOne({
          $push: {
            followings: req.params.id,
          },
        });

        return res.status(200).json("フォローに成功しました。");
      } else {
        return res
          .status(403)
          .json("あなたはすでにこのユーザをフォローしています。");
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(500).json("自分自身をフォローできません");
  }
});

// ユーザフォロー解除機能
router.put("/:id/unfollow", async (req, res) => {
  if (req.body.userId !== req.params.id) {
    try {
      // URLパラメータ側から相手のIDを取得
      const user = await User.findById(req.params.id);
      // リクエスト内で自分のIDを送る
      const currentUser = await User.findById(req.body.userId);

      // フォロワーに自分が存在していたら解除可能
      if (user.followers.includes(req.body.userId)) {
        await user.updateOne({
          // $pull 配列を持つプロパティに値を追加
          $pull: {
            followers: req.body.userId,
          },
        });
        await currentUser.updateOne({
          $pull: {
            followings: req.params.id,
          },
        });

        return res.status(200).json("フォロー解除成功しました。");
      } else {
        return res
          .status(403)
          .json("あなたはこのユーザをフォローしていません。");
      }
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(500).json("自分自身をフォロー解除できません");
  }
});

module.exports = router;
