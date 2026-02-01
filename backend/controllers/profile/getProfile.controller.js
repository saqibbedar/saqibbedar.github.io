export default async function getProfile(req, res) {
      if (!req.user) {
        return res.status(400).json("Unauthorized");
      }
      return res.status(200).json(req.user);
};
