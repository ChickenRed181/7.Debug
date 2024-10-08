let health = prompt('Введите число параметра "здоровье" для персонажа')

console.log('Введенное значение:', health)

if (health <= 0 || isNaN(health)) {
  alert('Параметр "здоровье" должен быть больше нуля!')
} else {
  alert(`Параметр "здоровье" равен ${health}`)
}
