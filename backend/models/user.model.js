import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    // singleton field (DB-enforced rule)
    singleton: {
      type: Boolean,
      default: true,
      unique: true,
      immutable: true,
    },

    username: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
      maxlength: 20,
      unique: true,
      index: true,
    },
    
    fullName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 50
    },
    
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
      index: true,
    },
    
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    
    // other details
    avatar: {
      type: Schema.Types.ObjectId, ref: "File"
    },

    description: {
      type: String,
      trim: true
    },

    resume: {
      type: mongoose.Schema.Types.ObjectId, ref: "File"
    },

    socialLinks: [{
      link: {type: String, trim: true},
      icon: {type: String, trim: true, },
      name: {type: String, trim: true}
    }]
  },
  { timestamps: true }
);

// compound index (optional but useful)
userSchema.index({ username: 1, email: 1 });

export default mongoose.models.User || mongoose.model("User", userSchema);
