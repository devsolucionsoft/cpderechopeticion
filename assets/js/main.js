<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/polyfills.umd.js"></script>
    <script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>

const { jsPDF } = window.jspdf
const antiquaFont = "./assets/fonts/antiqua.ttf"
//var doc = new jsPDF()

const doc = new jsPDF({
  orientation: "p",
  unit: "mm",
  format: "letter", // or "smart", default is 16
})
doc.setFontSize(12)
// add the font to jsPDF
//  doc.addFileToVFS("antiqua.ttf", antiquaFont)
// doc.addFont("./assets/fonts/antiqua.ttf", "antiquaFont", "normal")
// doc.setFont("antiquaFont")

const required_message = "Este campo es requerido"
const invalidmail_message = "Este campo es requerido"
const invaliddocument_message = "Este campo es requerido"

MicroModal.init()

$("#send-form").click(function () {
  generateDocHtml()
})

const w = 215
const mt = 25
const mr = 25
const ml = 25
const cw = w - ml - mr

let currentLine = mt
function setCurrentLine(line) {
  currentLine += line
  return currentLine
}

function generateDoc() {
  // doc.text("Ciudad del que escribe, fecha", w - mr, mt, {
  //   align: "right",
  // })
  // doc.stroke()
  // doc.text(
  //   "Nombre del funcionario al que se le pregunta",
  //   ml,
  //   setCurrentLine(20),
  //   {
  //     renderingMode: "fillThenStroke",
  //   }
  // )
  // doc.text(
  //   "Cargo del funcionario al que se le pregunta",
  //   ml,
  //   setCurrentLine(5),
  //   {
  //     renderingMode: "fillThenStroke",
  //   }
  // )
  // doc.text("Entidad", ml, setCurrentLine(5), {
  //   renderingMode: "fillThenStroke",
  // })
  // doc.text("E.S.D", ml, setCurrentLine(5), {
  //   renderingMode: "fillThenStroke",
  // })
  // doc.text(
  //   "Referencia: Derecho de petición",
  //   w - mr,
  //   setCurrentLine(20),
  //   {
  //     align: "right",
  //   }
  // )

  // doc.text(
  //   "Nombres y apellidos, con cédula de  ciudadanía Número de cédula de Ciudad de expedición de la cédula, en ejercicio del derecho de petición y de acceso a la información pública, consagrados en los artículos 20, 23 y 74 de la  Constitución Política, regulados por los artículos 9, 13 y subsiguientes de la Ley 1437  de 2011, por la Ley 1712 de 2014 y las reformas implementadas en los artículos 1 y 9  de la Ley 2080 de 2021, respetuosamente me dirijo a usted para garantizar el  desarrollo material de mis derechos constitucionales; extiendo la siguiente solicitud: ",
  //   ml,
  //   setCurrentLine(20),
  //   {
  //     align: "justify",
  //     maxWidth: cw,
  //   }
  // )

  doc.save("a4.pdf")
}

function generateDocHtml() {
  window.html2canvas = html2canvas
  var pdfjs = document.querySelector("#html-template")

  doc.html(pdfjs, {
    callback: function (doc) {
      doc.save()
    },
    margin: [10, 20, 20, 20],
    autoPaging: "text",
    width: 180,
    windowWidth: 700,
  })
}
