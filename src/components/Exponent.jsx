const Exponent = ({ num, exponent }) => {
  const result = num ** exponent

  const multiplication = Array(exponent).fill(num).join(' * ')

  return (
    <div className="exponent-counter-container">
      <p className="exponent-label">
        {num}
        <sup>{exponent}</sup>
      </p>
      <p className="exponent-result">
        {multiplication} = {result}
      </p>
      <span className="total">{result}</span>
    </div>
  )
}

export default Exponent
