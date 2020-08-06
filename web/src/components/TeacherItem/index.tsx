import React from "react";

import whatsAppIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/30835506?s=460&u=2df1454c4d31b214b5ad7144687a0e42ca63d5e0&v=4"
          alt="Samuel Lucas"
        />
        <div>
          <strong>Samuel Lucas</strong>
          <span>Educação Física</span>
        </div>
      </header>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
        excepturi possimus soluta eaque mollitia voluptatibus recusandae
        veritatis fugit dolorum placeat. Repudiandae omnis quisquam debitis
        consequatur, a dolore saepe laboriosam. Tenetur!
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsAppIcon} alt="whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
