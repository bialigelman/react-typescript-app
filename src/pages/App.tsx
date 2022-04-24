import React, { useState } from 'react';
import Formulario from '../components/form';
import Lista from '../components/list'
import Cronometro from '../components/timer';
import { ListaTarefa } from '../types/tarefas';
import style from './page.module.scss'

function App() {
  const [tarefas, setTarefas] = useState<ListaTarefa[] | []>([]);
  const [selecionado, setSelecionado] = useState<ListaTarefa>();

  function selecionaTarefa(tarefaSelecionada: ListaTarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({ ...tarefa, selecionado: tarefa.id === tarefaSelecionada.id ? true : false })))
  }
  function finalizarTarefa() {

    if (selecionado) {
      setSelecionado(undefined)
      setTarefas(tarefasAnteriores =>
        tarefasAnteriores.map(tarefa => {
          if (tarefa.id === selecionado.id) {
            return {
              ...tarefa,
              selecionado: false,
              completado: true
            }
          }
          return tarefa;
        }))
    }
  }
    return (
      <div className={style.AppStyle}>
        <Formulario setTarefas={setTarefas} />
        <Lista tarefas={tarefas} selecionarTarefa={selecionaTarefa} />
        <Cronometro selecionado={selecionado} finalizarTarefa={finalizarTarefa} />
      </div>
    );
  }

  export default App;
