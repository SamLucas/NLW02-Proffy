import React, { useState, useEffect } from "react";

import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import Input from "../../components/Input";

import "./styles.css";
import "./formStyle.css";
import Select from "../../components/select ";
import api from "../../services/api";

export default function Teacher() {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    async function loadData() {
      await api.get("/classes").then(({ data }) => {
        setClasses(data);
      });
    }
    loadData();
  });

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Este são os proffys disponiveis.">
        <form id="search-teachers">
          <Select
            label="Matéria"
            name="subject"
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Matemática", label: "Matemática" },
              { value: "Português", label: "Português" },
              { value: "Geografia", label: "Geografia" },
              { value: "História", label: "História" },
              { value: "Educação Física", label: "Educação Física" },
              { value: "Química", label: "Química" },
            ]}
          />

          <Select
            label="Dia da semana"
            name="week_day"
            options={[
              { value: "0", label: "Domingo" },
              { value: "1", label: "Segunda-Feira" },
              { value: "2", label: "Terça-Feira" },
              { value: "3", label: "Quarta-Feira" },
              { value: "4", label: "Quinta-Feira" },
              { value: "5", label: "Sexta-Feira" },
              { value: "6", label: "Sábado" },
            ]}
          />

          <Input type="time" label="Hora" name="time" />
        </form>
      </PageHeader>

      <main>
        {/* {classes.map((classe) => {
          const { name, avatar, whatsapp, bio } = classe;
          return <TeacherItem name={name} />;
        })} */}
      </main>
    </div>
  );
}
