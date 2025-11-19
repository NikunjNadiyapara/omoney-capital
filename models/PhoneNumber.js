import mongoose from "mongoose";

const phoneNumberSchema = new mongoose.Schema(
  {
    phoneNumber: {
      type: String,
      required: [true, "Phone number is required"],
      unique: true,
      trim: true,
      validate: {
        validator: function (v) {
          return /^[6-9]\d{9}$/.test(v); // Indian phone number validation
        },
        message: (props) => `${props.value} is not a valid phone number!`,
      },
    },
    countryCode: {
      type: String,
      default: "+91",
    },
    source: {
      type: String,
      enum: ["webinar", "newsletter", "contact", "general"],
      default: "general",
    },
    status: {
      type: String,
      enum: ["active", "blocked"],
      default: "active",
    },
  },
  {
    timestamps: true,
  }
);

// Update timestamp before saving
phoneNumberSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const PhoneNumber =
  mongoose.models.PhoneNumber ||
  mongoose.model("PhoneNumber", phoneNumberSchema);

export default PhoneNumber;
