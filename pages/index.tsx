import styles from "../styles/form.module.css";
import { useState } from "react";
import Card from "../components/Card";
import InputNumber from "../components/InputNumber";
import Link from "next/link";

const Form = () => {
  const [qdtePortas, setQtdePortas] = useState(3)
  const [comPresente, setComPresente] = useState(1)

  return (
    <div className={styles.form}>
      <div>
        <Card bgcolor="#e63946">
          <h1>Monty Hall</h1>
        </Card>
        <Card>
          <InputNumber text="Qdte Portas" value={qdtePortas} onChange={newQtd => setQtdePortas(newQtd)} >
          </InputNumber>
        </Card>
      </div>
      <div>
        <Card>
          <InputNumber text="Porta com presente" value={comPresente} onChange={novaPortaComPresente => setComPresente(novaPortaComPresente)}/>
        </Card>
        <Card bgcolor="#457b9d">
          <Link href={`/game/${qdtePortas}/${comPresente}`}>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
          
        </Card>
      </div>
    </div>
  )
}

export default Form;