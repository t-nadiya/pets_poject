const rows = [2, 1, 1, 2, 1, 1, 1, 2, 2, 1];
const cols = [1, 1, 1, 2, 1, 1, 1, 1, 2, 1];

export const addRowsCols = (array: Vote[] | Breed[] | Cat[]) => {

    return array.map((item: Vote | Breed | Cat, index: number) => {
        return {
            ...item,
            rows: rows[index % rows.length],
            cols: cols[index % cols.length]
        }
    })
}
