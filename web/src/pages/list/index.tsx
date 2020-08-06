import React from "react";

import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import Input from "../../components/Input";

import "./styles.css";
import "./formStyle.css";
import Select from "../../components/select ";

export default function Teacher() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Este são os proffys disponiveis.">
        <form id="search-teachers">
          <Select
            label="Matéria"
            name="subject"
            options={[
              "Artes",
              "Matemática",
              "Português",
              "Geografia",
              "História",
              "Educação Física",
              "Química",
            ]}
          />

          <Select
            label="Dia da semana"
            name="week_day"
            options={[
              "Domingo",
              "Segunda-Feira",
              "Terça-Feira",
              "Quarta-Feira",
              "Quinta-Feira",
              "Sexta-Feira",
              "Sábado",
            ]}
          />

          <Input type="time" label="Hora" name="time" />
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
}
