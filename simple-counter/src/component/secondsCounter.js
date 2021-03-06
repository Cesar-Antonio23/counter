import { useEffect, useState } from "react";
import {Row, Col} from 'react-bootstrap';


const SecondsCounter = () => {
  const [contador, setContador] = useState(0);
  const [contador2, setContador2] = useState(0);
  const [contador3, setContador3] = useState(0);
  const [contador4, setContador4] = useState(0);
  const [contador5, setContador5] = useState(0);
  const [contador6, setContador6] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setContador((contador) => contador + 1);
    }, 1000);
  }, []);
  if (contador >= 10) {
    setContador(0);
    setContador2(contador2 + 1);
    if (contador2 >= 9) {
      setContador2(0);
      setContador3(contador3 + 1);
      if (contador3 >= 9) {
        setContador3(0);
        setContador4(contador4 + 1);
        if (contador4 >= 9) {
          setContador4(0);
          setContador5(contador5 + 1);
          if (contador5 >= 9) {
            setContador5(0);
            setContador6(contador6 + 1);
            if(contador6 >=9){
              setContador6(0);
            }
          }
        }
      }
    }
  }

  return (
    
    <Row>
      <Col className="reloj"><i className="far fa-clock fa-2x"/></Col>
      <Col><h1>{contador6}</h1> </Col>
      <Col><h1>{contador5}</h1></Col>
      <Col><h1>{contador4}</h1></Col>
      <Col><h1>{contador3}</h1></Col>
      <Col><h1>{contador2}</h1></Col>
      <Col><h1>{contador}</h1></Col>
    </Row>
      
  );
};

export default SecondsCounter;
