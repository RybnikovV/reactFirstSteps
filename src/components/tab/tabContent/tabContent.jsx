
export default TabContent;

function TabContent({selected, ...props}) {
    return(
        <div>
            {selected ? props.children : ''}
        </div>
    )
}