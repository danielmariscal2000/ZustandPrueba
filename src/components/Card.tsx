import style from "./Card/card.module.css";
import { userCounter } from "../store/counter";
import { useState } from "react";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Card(props: any) {
  const [editText, setEditText] = useState("");
  const title: string = props.element.title.toUpperCase();
  const { clearStoreId, onChangePost } = userCounter();

  const handleOnChange = (e) => {
    setEditText(e.target.value);
    onChangePost(e.target.value, props.element.id);
  };

  const handleSubmit = () => {
    onChangePost(editText, props.element.id);
    setEditText("");
  };
  return (
    <div className={style.card}>
      <div className={style.info}>
        <h3>{title}</h3>
        <p>{props.element.body}</p>
      </div>
      <div className={style.button}>
        <input
          className={style.input}
          type="text"
          value={editText}
          onChange={handleOnChange}
          placeholder="Editar"
        />
        <button className={style.guardar} onClick={handleSubmit}>
          Guardar
        </button>
        <button
          className={style.guardar}
          onClick={() => clearStoreId(props.element.id)}
        >
          Limpiar
        </button>
      </div>
    </div>
  );
}

export default Card;
