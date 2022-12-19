interface Person2 {
    name: string;
    age?: number; // 의도적으로 개체의 property가 있을 수도 있고 없을 수도 있을 때 ? 추가
}

function hello2(person:Person2):void {
    console.log(`안녕하세요! ${person.name} 입니다.`)
}

hello2({name:"jiae", age:32});
hello2({name:"jiae"});