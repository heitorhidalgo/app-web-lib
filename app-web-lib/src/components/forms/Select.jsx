import styles from "./Select.module.css";
function Select({ text, name, options, handlerOnchange, value }) {
  return(
 
    <div className={styles.form_control}>

        <label htmlFor={name}>{text}</label>

        <select name={name} id={name} onChange={handlerOnchange}>

            <option>Selecione uma categoria</option>

            {
                options.map((option)=>{
                    return <option key={option.cod_categoria} value={option.cod_categoria}>{option.nome_categoria}</option>
                })
            }

            {/* <option>Ficção científica</option>
            <option>Fantasia heroica</option>
            <option>Suspense</option>
            <option>Terror</option>
            <option>Distopia</option> */}

        </select>

    </div>

);
}
export default Select;