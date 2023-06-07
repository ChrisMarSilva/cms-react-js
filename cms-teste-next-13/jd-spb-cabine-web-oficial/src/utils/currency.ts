export const format = (value: number) => {

    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    })

    return formatter.format(value); //R$ 2.500,00
}