function theBeatlesPlay(musicians, instruments) {
    const arr = [];

    for(let i = 0; i < musicians.length; i++) {
      arr.push(musicians[i] + ' plays ' + instruments[i]);
    }
    return arr;
}

function johnLennonFacts(facts) {
    const newFacts = [];

    let i = 0;
    while(i < facts.length) {
      newFacts.push(`${facts}!!!`);
      i++;
    }
    return newFacts;
}
