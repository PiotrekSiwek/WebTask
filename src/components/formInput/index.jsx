import './index.css'

const FormInput = ({ type, name, value, onChange, placeholder, required, disabled, style, error, helperText }) => {

  const formStyle = style === 'full' ? 'formInput formInput-full' : 'formInput formInput-half';

  return (
      <div className='inputContainer'>
      <input
          className={formStyle}
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          style={{border: error? '1px solid #ED4C5C' :'1px solid #333'}}
      />
        {error && <span >{helperText}</span >}
      </div>
  );
};

export default FormInput;
