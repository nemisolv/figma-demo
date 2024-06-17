import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Loader from './Loader';
import Spinner from './Spinner';

function Button({
  to,
  href,
  size = 'md',
  primary = false,
  outline = false,
  text = false,
  rounded = false,
  disabled = false,
  fullWidth = false,
  children,
  className,
  leftIcon,
  btnGray,
  textLink,
  loading,
  //   rightIcon,
  onClick,
  ...passProps
}) {
  let Comp = 'button';
  const props = {
    // [className]: className,
    onClick,
    ...passProps,
  };

  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  const classes = ` 
    inline-flex items-center justify-center min-w-[100px]  py-2 px-4 rounded font-medium cursor-pointer   border border-transparent  inline-block  text-center select-none hover:opacity-90
        ${disabled ? 'opacity-50 pointer-events-none' : ''}
        ${primary ? 'bg-primary text-white' : ' '}
        ${text ? 'text-primary hover:underline' : ''}
        ${rounded ? 'rounded-full' : ''}
        ${outline ? 'border-primary text-primary ' : ''}
        ${size === 'sm' ? 'text-sm ' : size === 'lg' ? 'text-xl' : size === 'md' ? 'text-lg' : 'text-base'}
        ${fullWidth ? 'w-full' : ''}
        ${btnGray ? 'bg-gray-200' : ''}
        ${textLink ? 'underline text-primary' : ''}
        ${loading? ' opacity-50 pointer-events-none relative' : ''}
        
    `;

  return (
    <Comp className={`${classes} ${className}`} {...props}>
      {leftIcon && <span className="text-">{leftIcon}</span>}
      <span>{loading ? 
          <Spinner/>
 : children}</span>
      {/* {rightIcon && <span className={cx('icon')}>{rightIcon}</span>} */}
    </Comp>
  );
}

Button.propTypes = {
  to: PropTypes.string,
  href: PropTypes.string,
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  text: PropTypes.bool,
  rounded: PropTypes.bool,
  disabled: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  onClick: PropTypes.func,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  fullWidth: PropTypes.bool,
};

export default Button;
