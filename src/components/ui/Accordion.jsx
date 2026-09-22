/**
 * Список вопросов и ответов.
 * Использует <details>/<summary>, поэтому работает с клавиатуры
 * и понятен вспомогательным технологиям без JavaScript.
 */
export default function Accordion({ items }) {
  return (
    <div className="accordion">
      {items.map((item) => (
        <details className="accordion__item" key={item.q}>
          <summary className="accordion__summary">
            <span>{item.q}</span>
            <span className="accordion__icon" aria-hidden="true" />
          </summary>
          <div className="accordion__answer">
            <p>{item.a}</p>
          </div>
        </details>
      ))}
    </div>
  )
}
