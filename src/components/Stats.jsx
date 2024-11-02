export default function Stats({ countChar, countWord, countInstragram, countFacebook }) {
  return (
    <section className="stats">
      <Stat count={countWord} label={'words'} />
      <Stat count={countChar} label={'characters'} />
      <Stat count={countInstragram.count} label={'instragram'} limit={countInstragram.limit} />
      <Stat count={countFacebook.count} label={'facebook'} limit={countFacebook.limit} />
    </section>
  )
};

function Stat({ count, label, limit }) {
  return (
    <div className="stat ">
      <span className={`stat__number ${limit && 'stat__number--limit'}`}>{count}</span>
      <p className="second-heading ">{label}</p>
    </div>
  )
};