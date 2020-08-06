import React from "react";

import whatsAppIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";
import api from "../../services/api";

interface TearchProps {
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  cost: number;
  subject: string;
  id: number;
}

const TeacherItem: React.FC<TearchProps> = ({
  name,
  avatar,
  whatsapp,
  bio,
  subject,
  cost,
  id,
}) => {
  function createNewConnections() {
    api.post("connections", {
      user_id: id,
    });
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={avatar} alt={name} />
        <div>
          <strong>{name}</strong>
          <span>{subject}</span>
        </div>
      </header>

      <p>{bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {cost}</strong>
        </p>
        <a
          href={`http://wa.me/${whatsapp}`}
          onClick={createNewConnections}
          type="button"
          target="_black"
        >
          <img src={whatsAppIcon} alt="whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
