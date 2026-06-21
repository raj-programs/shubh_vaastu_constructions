import emailjs from "@emailjs/browser"

export const sendInquiry = async (formData) => {
    try {
        const response = await emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formData,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

        return{
            success: true,
            data: response,
        };
    } catch (error) {
        return{
            success: false,
            error,
        }
        
    }
}