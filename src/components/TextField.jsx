import Warning from "./Warning";

export default function TextField({ text, setText, warning, setWarning }) {

  return (
    <section className="textarea">
      <textarea
        autoFocus
        placeholder="Enter you text"
        value={text}
        onChange={e => { setText(e.currentTarget.value); setWarning('') }}>
      </textarea>

      <Warning>{warning}</Warning>
    </section>
  )
};