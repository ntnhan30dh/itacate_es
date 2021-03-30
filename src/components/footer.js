import React from "react"
import { Link } from "gatsby"

const Contact = () => {
  return (
    <section className="footer">
      <div className="blackDiv">
      <ul>
          <li>
            <Link to="/imprint">Imprimir

 </Link>
            </li>
            <li>
            <Link to="/privacy">Política de privacidad</Link>
            </li>
            <li>
            <Link to="/disclaimer">Descargo de responsabilidad</Link>
            </li>
        </ul>
      </div>
    </section>
  )
}

export default Contact
