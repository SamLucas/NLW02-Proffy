import React, { useState, FormEvent } from "react";
import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";

import { useHistory } from "react-router-dom";

import warningIcon from "../../assets/images/icons/warning.svg";

import "./styles.css";
import TextArea from "../../components/textArea";
import Select from "../../components/select ";
import api from "../../services/api";

export default function Forms() {
  const history = useHistory();

  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [bio, setBio] = useState("");
  const [whatsapp, setWhatsapp] = useState("");

  const [cost, setCost] = useState("");
  const [subject, setSubject] = useState("");

  const [scheduleItens, setScheduleItens] = useState([
    {
      week_day: "0",
      from: "",
      to: "",
    },
  ]);

  const addNewScheduleItem = () => {
    setScheduleItens((state) => [
      ...state,
      {
        week_day: "0",
        from: "",
        to: "",
      },
    ]);
  };

  const setScheduleItemValues = (
    position: number,
    field: string,
    value: string
  ) => {
    const updatedSchedulesItens = scheduleItens.map((scheduleIten, index) => {
      return index === position
        ? { ...scheduleIten, [field]: value }
        : scheduleIten;
    });

    setScheduleItens(updatedSchedulesItens);
  };

  const handleCreateClasses = async (e: FormEvent) => {
    e.preventDefault();

    await api
      .post("classes", {
        name,
        avatar,
        bio,
        whatsapp,
        cost: Number(cost),
        subject,
        schedule: scheduleItens,
      })
      .then(() => {
        alert("Dados cadastrados!");
        history.push("/");
      })
      .catch(() => {
        alert("Erro no cadastro!");
      });

    console.log(name, avatar, bio, whatsapp, cost, subject, scheduleItens);
  };

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrivel que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />
      <main>
        <form onSubmit={handleCreateClasses}>
          <fieldset>
            <legend>Seus dados</legend>

            <Input
              label="Nome Completo"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              label="Avatar"
              name="avatar"
              value={avatar}
              onChange={(e) => setAvatar(e.target.value)}
            />
            <Input
              label="WhatsApp"
              name="whatsapp"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
            />
            <TextArea
              name="bio"
              label="Biografia"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Sobre a aula</legend>

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
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <Input
              label="Custo da sua hora por aula"
              name="cost"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>
              Horários disponiveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo horario
              </button>
            </legend>

            {scheduleItens.map((scheduleIten, index) => {
              return (
                <div key={index} className="schedule-item">
                  <Select
                    label="Matéria"
                    name="subject"
                    value={scheduleIten.week_day}
                    onChange={(e) =>
                      setScheduleItemValues(index, "week_day", e.target.value)
                    }
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
                    name="from"
                    label="das"
                    type="time"
                    value={scheduleIten.from}
                    onChange={(e) =>
                      setScheduleItemValues(index, "from", e.target.value)
                    }
                  />
                  <Input
                    name="to"
                    label="Até"
                    type="time"
                    value={scheduleIten.to}
                    onChange={(e) =>
                      setScheduleItemValues(index, "to", e.target.value)
                    }
                  />
                </div>
              );
            })}
          </fieldset>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante <br />
              Preencha todos os campos
            </p>

            <button type="submit">Salvar cadastro</button>
          </footer>
        </form>
      </main>
    </div>
  );
}
