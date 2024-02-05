import { FilterButton, FilterButtonContainer, FiltersContainter, ItemsLeft } from "./TodoFilters.components"

const TodoFilters = ()=> {
    return (
       <FiltersContainter>
        <ItemsLeft/>
        <FilterButtonContainer>
        <FilterButton action={()=> {}} active='All' filter='All'/>
        <FilterButton action={()=> {}} active='All' filter='Active'/>
        <FilterButton action={()=> {}} active='All' filter='Completed'/>

        </FilterButtonContainer>
        <button className="text-gary-400 hover:text-white cursor-pointer transition-all duration-300 ease-in">
            Clear Completed 
        </button>
       </FiltersContainter>

    )
}

export {TodoFilters}