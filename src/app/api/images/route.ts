import ImageUpload from "../../../../models/ImageUpload"
import { connectToDB } from "../../../../utils/database";

export const GET = async (request: any) => {
    try {

        await connectToDB();

        const images = await ImageUpload.find({})

        return new Response(JSON.stringify(images), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all images", { status: 500 })
    }
} 