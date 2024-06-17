import { useController } from 'react-hook-form';
import PropTypes from 'prop-types';
import ErrorInputImg from '@assets/images/error_input.png';

function Textarea({ label, name, control, errors, className,  ...rest }) {
  const { field } = useController({ name, control });

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  return (
    <div>
      <label htmlFor={rest.id || name} className="font-semibold">
        {label}
      </label>
      <div className="relative">
        <textarea id={rest.id || name}
            name={name}
            onKeyDown={handleKeyDown}
            cols={30}
            rows={10}

            className={`py-3 px-4 border border-gray-300 w-full
                rounded-md mt-1  ${errors[name] ? 'border-red-500' : 'focus:border-primary focus:ring-1'}  ${className} 
                `}
            {...field}
            {...rest}>
        </textarea>
        
        {errors[name] && (
          <img src={ErrorInputImg} alt="" className="absolute top-2/4 -translate-y-[40%] right-3  w-5 h-5" />
        )}
      </div>
      {errors[name] && <p className="text-red-500 ml-2 text-xs mt-1">{errors[name].message}</p>}
    </div>
  );
}

Textarea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  control: PropTypes.object,
  errors: PropTypes.object,
  className: PropTypes.string,
};

export default Textarea;
