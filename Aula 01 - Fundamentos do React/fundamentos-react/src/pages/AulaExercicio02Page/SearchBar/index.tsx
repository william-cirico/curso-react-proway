interface IProps {
    filterText: string;
    setFilterText: (value: string) => void;
    toggleStock: () => void;
    inStockOnly: boolean;    
}

export function SearchBar(props: IProps) {
    return (
        <>
            <input value={props.filterText} onChange={e => props.setFilterText(e.target.value)} /><br />
            <label>
                <input type="checkbox" onChange={props.toggleStock} checked={props.inStockOnly} />
                Only show products in stock
            </label>
        </>
    )
}