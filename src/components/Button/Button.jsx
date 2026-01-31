import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';
import classNames from 'classnames';

/**
 * Button component with multiple variants, sizes, and states
 * @component
 * @example
 * <Button variant="primary" onClick={() => console.log('clicked')}>
 *   Click me
 * </Button>
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  type = 'button',
  disabled = false,
  loading = false,
  fullWidth = false,
  rounded = false,
  iconOnly = false,
  startIcon,
  endIcon,
  className,
  onClick,
  href,
  target,
  rel,
  ...props
}) => {
  // Determine if button is anchor or button element
  const isAnchor = Boolean(href);
  const Element = isAnchor ? 'a' : 'button';

  // Combine class names
  const buttonClasses = classNames(
    styles.button,
    styles[variant],
    styles[size],
    {
      [styles.fullWidth]: fullWidth,
      [styles.rounded]: rounded,
      [styles.iconOnly]: iconOnly || (!children && (startIcon || endIcon)),
      [styles.loading]: loading,
      [styles.disabled]: disabled,
    },
    className
  );

  // Button props
  const buttonProps = {
    className: buttonClasses,
    disabled: disabled || loading,
    onClick,
    ...props,
  };

  // Anchor props
  const anchorProps = {
    ...buttonProps,
    href: disabled ? undefined : href,
    target,
    rel: target === '_blank' ? 'noopener noreferrer' : rel,
    role: 'button',
    'aria-disabled': disabled || loading,
  };

  const elementProps = isAnchor ? anchorProps : {
    ...buttonProps,
    type,
    'aria-disabled': disabled || loading,
  };

  // Determine if button is icon-only (for accessibility)
  const isIconOnly = iconOnly || (!children && (startIcon || endIcon));

  return (
    <Element {...elementProps}>
      {loading && (
        <span className={styles.spinner} aria-hidden="true" />
      )}
      
      {!loading && startIcon && (
        <span className={styles.startIcon} aria-hidden="true">
          {startIcon}
        </span>
      )}
      
      {children && (
        <span className={styles.content}>
          {children}
        </span>
      )}
      
      {!loading && endIcon && (
        <span className={styles.endIcon} aria-hidden="true">
          {endIcon}
        </span>
      )}
      
      {/* Screen reader text for loading state */}
      {loading && (
        <span className="visually-hidden">
          Loading...
        </span>
      )}
      
      {/* Accessibility for icon-only buttons */}
      {isIconOnly && !props['aria-label'] && !props['aria-labelledby'] && (
        <span className="visually-hidden">
          Button
        </span>
      )}
    </Element>
  );
};

Button.propTypes = {
  /** Button content */
  children: PropTypes.node,
  
  /** Button variant */
  variant: PropTypes.oneOf(['primary', 'secondary', 'ghost', 'outline', 'danger', 'success']),
  
  /** Button size */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  
  /** Button type (for button element) */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  
  /** Disabled state */
  disabled: PropTypes.bool,
  
  /** Loading state */
  loading: PropTypes.bool,
  
  /** Stretch to full width */
  fullWidth: PropTypes.bool,
  
  /** Rounded corners (pill shape) */
  rounded: PropTypes.bool,
  
  /** Icon only button (no text) */
  iconOnly: PropTypes.bool,
  
  /** Icon at the start */
  startIcon: PropTypes.node,
  
  /** Icon at the end */
  endIcon: PropTypes.node,
  
  /** Additional CSS class */
  className: PropTypes.string,
  
  /** Click handler */
  onClick: PropTypes.func,
  
  /** If provided, renders as anchor tag */
  href: PropTypes.string,
  
  /** Anchor target attribute */
  target: PropTypes.string,
  
  /** Anchor rel attribute */
  rel: PropTypes.string,
  
  /** Accessibility: label for icon-only buttons */
  'aria-label': PropTypes.string,
  
  /** Accessibility: labelled by for icon-only buttons */
  'aria-labelledby': PropTypes.string,
};

Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
  type: 'button',
  disabled: false,
  loading: false,
  fullWidth: false,
  rounded: false,
  iconOnly: false,
};

export default Button;