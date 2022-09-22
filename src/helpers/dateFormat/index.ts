import { format } from 'date-fns'
import { pt } from 'date-fns/locale'

/*
 * '2022-02-26 22:50:35'
 * */
function DateFormat (date: string) {
  const dateFormatted = format(new Date(date), "dd 'de' MMMM 'de' yyyy", {
    locale: pt
  })

  return dateFormatted
}

export default DateFormat
