import { sortItems } from "./sort";

const object = [
    {id: 1},
    {id: 2}
]

test('Тестирование сортировки', () =>{
    expect([1]).toStrictEqual([1])
    expect(sortItems(object, 'id')).toStrictEqual([
        {id: 1},
        {id: 2},
    ])
    expect(sortItems(object, '-id')).toStrictEqual([
        {id: 2},
        {id: 1},
    ])
   
})

test('Граничное значение при сортировке', () =>{
    expect(sortItems([{id: 1231232131231312312312313112312312312312313123123131313223}], 'id'))
    .toStrictEqual([{id: 1231232131231312312312313112312312312312313123123131313223}])
})

test('Минимальный элемент при  сортировке  по  возрастанию станет первым', () =>{
    const value = [{id: 123}, {id: 1230}]
    const result = sortItems(value, 'id')[0]
    expect(result).toStrictEqual({id: 123})
})