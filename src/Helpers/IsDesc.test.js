import { isDesc } from "./IsDesc";

test('Тестирование функции IsDesc', () =>{
    expect(isDesc('-volume', 'volume')).toBe(true)
    expect(isDesc('volume', 'volume')).toBe(false)
})