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
    while(i < 15) {
      newFacts.push(`${facts}!!!`);
    }
    return newFacts;
}
