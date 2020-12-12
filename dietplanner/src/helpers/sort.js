

function sortAscending(array){
    return [...array].sort((a, b) => a.ingredient.label.localeCompare(b.ingredient.label))
}