var doc = new jsPDF()
doc.text('Domine a Programação: 51 Dicas de Ouro para Impulsionar Sua Carreira na Tecnologia', 10, 10)
// doc.save('a4.pdf')
var doc = new jsPDF({
  orientation: 'landscape',
  unit: 'cm',
  format: 'letter'
})