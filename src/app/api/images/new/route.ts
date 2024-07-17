import ImageUpload from "../../../../../models/ImageUpload";
import { connectToDB } from "../../../../../utils/database";

export const POST = async (request: any) => {   
    try {

        await connectToDB();

        const { imageCategory, imageUrl }: { imageCategory: string; imageUrl: string } = await request.json();

        console.log({imageCategory, imageUrl}, 'here');
        
        const newImageDetails = new ImageUpload({ imageCategory, imageUrl });

        const savedImageDetails = await newImageDetails.save();
        
        return new Response(JSON.stringify({ message: "Image saved successfully", savedImageDetails }), { status: 200 });

    } catch (error) {
        console.error("Error saving image:", error);
        return new Response("Failed to Upload Image", { status: 500 });
    }
}
