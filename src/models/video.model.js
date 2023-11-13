const mongoose = require('mongoose');
const mongooseAggregatepaginate = require("mongoose-aggregate-paginate-v2");

const videoSchema = mongoose.Schema({
    videoFile: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,

    },
    duration: {
        type: Number,
        required: true
    },
    views: {
        type: Number,
        default: 0
    },
    isPublished: {
        type: Boolean,
        default: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

},
    { timeStamps: true }
);
videoSchema.plugin(mongooseAggregatepaginate);
export const Video = mongoose.model("Video", videoSchema);
