export default function ZombieEnemy({
  label,
  imageSrc,
  onShoot,
  isShot = false,
  shotResult = null,
  disabled = false,
  depth = 0,
  style,
}) {
  const resultClass =
    isShot && shotResult === 'correct'
      ? 'zombie-shot-correct'
      : isShot && shotResult === 'wrong'
        ? 'zombie-shot-wrong'
        : ''

  return (
    <button
      type="button"
      className={`zombie-enemy depth-${depth} ${resultClass}`}
      style={style}
      onClick={onShoot}
      disabled={disabled}
      aria-label={`Shoot answer: ${label}`}
    >
      <img className="zombie-sprite" src={imageSrc} alt="" draggable="false" />
      <div className="answer-label">{label}</div>
      <span className="zombie-shot-flash" />
      <span className="slime-burst" />
    </button>
  )
}
