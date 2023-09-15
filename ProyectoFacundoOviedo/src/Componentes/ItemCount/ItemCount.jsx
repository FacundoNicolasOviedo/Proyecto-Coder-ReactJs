import { useState } from "react"


const [count, setCount] = useState(0)
function aumentar() {

  if (count < 10) {
    setCount(count + 1)
  } else {
    alert("No se pueden pedir mas productos")
  }
}

function reducir() {
  if (count > 0) {
    setCount(count - 1)
  } else {
    alert("elija una cantidad valida")
  }

}


