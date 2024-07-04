import { Schema, model, models } from 'mongoose';

const ImageUploadSchema = new Schema({
    imageCategory: {
        type: String,
        required: [true, 'image Category is required.'],
    },
    imageUrl: {
        type: String,
        required: [true, 'Image are required.'],
    },
});

const ImageUpload = models.ImageUpload || model('ImageUpload', ImageUploadSchema);

export default ImageUpload;
