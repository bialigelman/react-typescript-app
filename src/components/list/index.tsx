import style from './list.module.scss'
import Item from './item'
import { ListaTarefa } from '../../types/tarefas';

interface Props{
    tarefas: ListaTarefa[],
    selecionarTarefa: (tarefaSelecionada: ListaTarefa) => void
}


function Lista({tarefas, selecionarTarefa}: Props) {
   
    return (
        <aside className={style.listaTarefas}>
            <h2> Estudos do dia </h2>
            <ul>
            {tarefas.map((item, index) => (
                <Item {...item} selecionarTarefa={selecionarTarefa} key={item.id}/>
            ))}
            </ul>
        </aside>
    );
}
export default Lista;
