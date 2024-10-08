const temperatureInCelsius = prompt('Введите температуру в градусах Цельсия')

const temperatureInCelsiusNumber = Number(temperatureInCelsius)

console.log('Введенная температура в Цельсиях:', temperatureInCelsiusNumber)

if (temperatureInCelsiusNumber === 0) {
   alert('0 градусов по Цельсию - это температура замерзания воды')
} else if (temperatureInCelsiusNumber > 0) {
   alert('Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже')
}

const temperatureInFahrenheit = (temperatureInCelsiusNumber * 9 / 5) + 32

alert(`${temperatureInCelsiusNumber} градусов по Цельсию - это ${temperatureInFahrenheit} по Фаренгейту.`)
