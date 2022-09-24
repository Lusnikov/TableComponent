import { filtration } from "./Filtration";

const projects = [
    {id: 1, name: 'Pyshky.net', status: 'green', type: 'TRST', conditions: 'x2,6 months', volume: 120000, roi: 4, free: 20, hedge: 20},
    {id: 2, name: 'NFT-Flowershop', status: 'yellow', type: 'THT', conditions: 'x4,2 years', volume: 80000, roi: 23, free: 12, hedge: 0},
    {id: 4, name: 'Web3 P2P University', status: 'red', type: 'TRST', conditions: 'x2,1 years', volume: 200000, roi: 6, free: 1, hedge: 0},
    {id: 14, name: 'Web3 P2P University', status: 'red', type: 'TRST', conditions: 'x2,1 years', volume: 100, roi: 6, free: 1, hedge: 0},
]

test('Пустое значение объекта фильтровки', () =>{
    expect(filtration({}, projects)).toStrictEqual(projects)
})


test('Фильтрация при несуществующем поле', () =>{
    console.log(filtration({notExistsField: 'testField'}, projects))
})

test('Фильтровка проектов со статусом "green"', () =>{
    const filtered = filtration({status: 'green'}, projects)
    expect(filtered.length).toBe(1)
    expect(filtered).toStrictEqual([{id: 1, name: 'Pyshky.net', status: 'green', type: 'TRST', conditions: 'x2,6 months', volume: 120000, roi: 4, free: 20, hedge: 20}])
})

test('Фильтровка проектов со статусом "green" и типом "TRST"', () =>{
    const filtered = filtration({status: 'green', type: 'TRST'}, projects)
    expect(filtered.length).toBe(1)
    expect(filtered).toStrictEqual([{id: 1, name: 'Pyshky.net', status: 'green', type: 'TRST', conditions: 'x2,6 months', volume: 120000, roi: 4, free: 20, hedge: 20}])

})

test('Фильтровка проектов со статусом "green" и типом "THT"', () =>{
    const filtered = filtration({status: 'green', type: 'THT'}, projects)
    expect(filtered.length).toBe(0)
    expect(filtered).toStrictEqual([])

})
