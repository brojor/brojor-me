export function useHackerText(target: HTMLSpanElement) {
  const letters = 'abcdefghijklmnopqrstuvwxyz'
  const innerText = target.innerText
  const randomLetter = () => letters[Math.floor(Math.random() * letters.length)]
  const isUpperCase = (letter: string) => letter === letter.toUpperCase()
  let interval: ReturnType<typeof setInterval>

  target.onmouseover = () => {
    shuffleLetters()
  }

  function shuffleLetters() {
    let iteration = 0
    clearInterval(interval)

    interval = setInterval(() => {
      target.innerText = [...target.innerText]
        .map((_, index) => {
          if (index < iteration) {
            return innerText[index]
          }
          return isUpperCase(innerText[index]) ? randomLetter().toUpperCase() : randomLetter()
        })
        .join('')

        if (iteration >= innerText.length) {
          clearInterval(interval)
        }

        iteration += 1 / 3
    }, 50)
  }

  return { shuffleLetters }
}
