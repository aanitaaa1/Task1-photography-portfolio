function FavoriteToggle({ isFavorite, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={isFavorite}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      className={`text-xl leading-none cursor-pointer transition hover:scale-110 ${
        isFavorite ? 'text-accent' : 'text-stone'
      }`}
    >
      {isFavorite ? '♥' : '♡'}
    </button>
  )
}

export default FavoriteToggle
