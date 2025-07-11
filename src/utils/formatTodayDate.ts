export function formatTodayDate() {
  const weekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ]
  const months = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro',
  ]

  const today = new Date()
  const dayWeek = weekDays[today.getDay()]
  const day = today.getDate()
  const month = months[today.getMonth()]

  return `${dayWeek}, ${day} de ${month}`
}
