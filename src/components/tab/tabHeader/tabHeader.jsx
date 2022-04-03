export default TabHeader;

function TabHeader({changeActiveTab, selected, index, ...props}) {
    const clickHandler = () => {
        changeActiveTab(index)
    };

    const getClassName = () => {
        if (selected) return 'tab__header-item tab__header-item_active'
        return 'tab__header-item'
    }

    return(
        <div className={getClassName()} onClick={clickHandler}>
            {props.children}
        </div>
    )
}