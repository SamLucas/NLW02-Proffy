import React, { useState, useEffect, FormEvent } from "react";

import PageHeader from "../../components/PageHeader";
import TeacherItem from "../../components/TeacherItem";
import Input from "../../components/Input";

import "./styles.css";
import "./formStyle.css";
import Select from "../../components/select ";
import api from "../../services/api";

export default function Teacher() {
  const [classes, setClasses] = useState([]);

  const [subject, setSubject] = useState("");
  const [week_day, setWeekDay] = useState("");
  const [time, setTime] = useState("");

  async function loadData(e: FormEvent) {
    e.preventDefault();

    const { data } = await api.get("classes", {
      params: {
        subject,
        week_day,
        time,
      },
    });

    setClasses(data);
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Este são os proffys disponiveis.">
        <form id="search-teachers" onSubmit={loadData}>
          <Select
            label="Matéria"
            name="subject"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
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
            value={week_day}
            onChange={(e) => {
              setWeekDay(e.target.value);
            }}
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

          <Input
            type="time"
            label="Hora"
            name="time"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />
          <button type="submit">Buscar</button>
        </form>
      </PageHeader>

      <main>
        {classes.map((classe) => {
          const { name, avatar, whatsapp, bio, cost, subject, id } = classe;
          return (
            <TeacherItem
              key={id}
              cost={cost}
              subject={subject}
              id={id}
              name={name}
              avatar={avatar}
              whatsapp={whatsapp}
              bio={bio}
            />
          );
        })}
      </main>
    </div>
  );
}
