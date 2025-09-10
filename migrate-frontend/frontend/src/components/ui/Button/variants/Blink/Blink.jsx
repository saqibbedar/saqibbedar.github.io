const Blink = (label, ...props) => {
  return (
      <button {...props}>
          <span></span>
          {label}
    </button>
  )
}

export default Blink
