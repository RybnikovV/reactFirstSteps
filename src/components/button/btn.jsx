import classes from './btn.module.css';

export default MyButton;

function MyButton({children, ...props}) {
    console.log()
    return (
        <button className={classes.btn} {...props}>
            {children}
        </button>
    )
}