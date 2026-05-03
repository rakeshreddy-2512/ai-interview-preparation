import mongoose from 'mongoose';

const progressSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    problemsSolved: { type: Number, default: 0 },
    mockInterviewsCompleted: { type: Number, default: 0 },
    readinessScore: { type: Number, default: 0 },
    skillBreakdown: {
      dsa: { type: Number, default: 0 },
      systemDesign: { type: Number, default: 0 },
      behavioral: { type: Number, default: 0 }
    }
  },
  { timestamps: true }
);

export default mongoose.model('Progress', progressSchema);
