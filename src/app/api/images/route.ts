import ImageUpload from "../../../../models/ImageUpload"

export const GET = async (request: any) => {
    try {
        const images = await ImageUpload.find({})

        return new Response(JSON.stringify(images), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all images", { status: 500 })
    }
} 