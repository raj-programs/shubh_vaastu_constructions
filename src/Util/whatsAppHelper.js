export const openWhatsApp = (msg) => {
    const phoneNumber = "917447438987";

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        msg
    )}`;

    window.open(url, "_blank");
}