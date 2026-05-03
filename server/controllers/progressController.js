import Progress from '../models/Progress.js';

export async function getProgress(req, res) {
  let progress = await Progress.findOne({ user: req.user.id });
  if (!progress) {
    progress = await Progress.create({ user: req.user.id });
  }
  res.json(progress);
}

export async function updateProgress(req, res) {
  const update = req.body;
  const progress = await Progress.findOneAndUpdate({ user: req.user.id }, update, { new: true, upsert: true });
  res.json(progress);
}
