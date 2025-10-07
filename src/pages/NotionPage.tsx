import React from "react";

interface NotionPageProps {
    user?: string;
}

const NotionPage: React.FC<NotionPageProps> = ({ user }) => {
    // Link de Notion
    const notionURL = "https://affiliategydi.notion.site/206cc0d9d8fc801a9ae8c44bcf26a5dd?v=206cc0d9d8fc80c8b355000cc02945a3";

    // Link de WhatsApp dinámico
    const whatsappLink = `https://wa.me/573001234567?text=Hola,%20soy%20${encodeURIComponent(user || "Desconocido")}`;

    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
            {/* Botón de WhatsApp */}
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={{ padding: "10px", background: "#25D366", color: "white", textAlign: "center", textDecoration: "none" }}>
                Enviar WhatsApp
            </a>

            {/* Iframe de Notion */}
            <iframe
                src={notionURL}
                style={{ flex: 1, border: "none" }}
                title="Notion"
            />
        </div>
    );
};

export default NotionPage;
