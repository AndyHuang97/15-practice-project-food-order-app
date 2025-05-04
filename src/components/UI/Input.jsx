export default function Input({ label, id, ...props }) {
  return (
    <p className='control'>
      <label htmlFor={id}>{label}</label>
      {/* use required for built-in browser validation*/}
      <input id={id} name={id} required {...props} />
    </p>
  );
}
