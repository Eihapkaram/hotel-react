import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  const whatsappNumber = "201012345678"; // 🔥 غير الرقم هنا
  const message = "مرحبا، اريد الاستفسار عن العقارات";

  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <>
      <style>
        {`
          .whatsapp-float {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #25D366;
            color: white;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 32px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            z-index: 9999;
            transition: 0.3s;
          }

          .whatsapp-float:hover {
            transform: scale(1.1);
            color: white;
          }

          /* 📱 Mobile */
          @media (max-width: 576px) {
            .whatsapp-float {
              width: 55px;
              height: 55px;
              font-size: 28px;
              bottom: 15px;
              right: 15px;
            }
          }
        `}
      </style>

      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <FaWhatsapp />
      </a>
    </>
  );
}
